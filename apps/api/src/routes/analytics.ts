import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq } from 'drizzle-orm'
import { authMiddleware, AuthUser } from '../middleware/auth'
import { Redis } from '@upstash/redis'

type Env = { Variables: { user: AuthUser } }

const router = new Hono<Env>()
router.use('*', authMiddleware)

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID
const CF_ANALYTICS_API_TOKEN = process.env.CF_ANALYTICS_API_TOKEN
const DATASET = 'snap_click_events'
const STREAM_NAME = 'click-events'

async function queryAnalytics(query: string): Promise<any[]> {
  if (!CF_ACCOUNT_ID || !CF_ANALYTICS_API_TOKEN) throw new Error('CF credentials missing')
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/analytics_engine/sql`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${CF_ANALYTICS_API_TOKEN}` },
    body: query,
  })
  if (!response.ok) {
    const err = await response.text()
    console.error('CF Analytics query failed:', err)
    throw new Error('CF Analytics unavailable')
  }
  const data = await response.json() as any
  return data.data as any[]
}

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error('Redis credentials missing')
  return new Redis({ url, token })
}

interface ClickEvent {
  short_code: string
  clicked_at: string
  country: string
  referrer: string
  user_agent: string
}

async function getRedisEvents(filterCodes?: string[], from?: string, to?: string): Promise<ClickEvent[]> {
  const redis = getRedis()
  const raw = await redis.xrange(STREAM_NAME, '-', '+') as any
  const events: ClickEvent[] = []
  if (!raw || typeof raw !== 'object') return events
  
  const fromTime = from ? new Date(from).getTime() : 0
  const toTime = to ? new Date(to).getTime() : Infinity

  for (const id of Object.keys(raw)) {
    const f = raw[id]
    if (!f || typeof f !== 'object') continue
    const sc = (f.short_code || '') as string
    if (filterCodes && !filterCodes.includes(sc)) continue
    
    const clickedAt = (f.clicked_at || '') as string
    if (clickedAt) {
      const ts = new Date(clickedAt).getTime()
      if (ts < fromTime || ts > toTime) continue
    }

    events.push({ short_code: sc, clicked_at: clickedAt, country: (f.country || 'Unknown') as string, referrer: (f.referrer || '') as string, user_agent: (f.user_agent || '') as string })
  }
  return events
}

function redisSummary(events: ClickEvent[], shortCodes: string[]) {
  const total_clicks = events.length
  const total_snips = shortCodes.length
  return { total_clicks, total_snips, avg_clicks: total_snips > 0 ? Math.round((total_clicks / total_snips) * 10) / 10 : 0 }
}

function getWeekStart(d: Date) {
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1); 
  return new Date(d.setDate(diff)).toISOString().slice(0, 10);
}

function redisDaily(events: ClickEvent[], granularity: string) {
  const byBucket: Record<string, number> = {}
  for (const e of events) {
    if (!e.clicked_at) continue
    const d = new Date(e.clicked_at)
    let bucket = ''
    if (granularity === 'month') {
      bucket = d.toISOString().slice(0, 7) + '-01'
    } else if (granularity === 'week') {
      bucket = getWeekStart(d)
    } else {
      bucket = d.toISOString().slice(0, 10)
    }
    byBucket[bucket] = (byBucket[bucket] || 0) + 1
  }
  return Object.entries(byBucket).sort(([a], [b]) => a.localeCompare(b)).map(([date, clicks]) => ({ date, clicks }))
}

function redisBreakdown(events: ClickEvent[], by: string) {
  const counts: Record<string, number> = {}
  for (const e of events) {
    let label = ''
    if (by === 'country') label = e.country || 'Unknown'
    else if (by === 'referrer') label = e.referrer || 'Direct'
    else if (by === 'device') {
      const ua = (e.user_agent || '').toLowerCase()
      label = ua.includes('mobile') || ua.includes('android') || ua.includes('iphone') ? 'Mobile' : ua.includes('tablet') || ua.includes('ipad') ? 'Tablet' : 'Desktop'
    } else label = 'Unknown'
    counts[label] = (counts[label] || 0) + 1
  }
  return Object.entries(counts).sort(([, a], [, b]) => b - a).slice(0, 10).map(([label, clicks]) => ({ label, clicks }))
}

function redisTopLinks(events: ClickEvent[], userUrls: { short_code: string, long_url: string }[]) {
  const counts: Record<string, number> = {}
  for (const e of events) counts[e.short_code] = (counts[e.short_code] || 0) + 1
  return Object.entries(counts).sort(([, a], [, b]) => b - a).slice(0, 5).map(([short_code, clicks]) => ({ short_code, long_url: userUrls.find(u => u.short_code === short_code)?.long_url || '', clicks }))
}

function redisBulkSummary(events: ClickEvent[], codes: string[]) {
  const result: Record<string, number> = {}
  codes.forEach(c => { result[c] = 0 })
  events.forEach(e => { if (e.short_code in result) result[e.short_code]++ })
  return result
}

async function getUserShortCodes(userId: string) {
  const rows = await db.select({ short_code: urls.short_code }).from(urls).where(eq(urls.user_id, userId))
  return rows.map(u => u.short_code)
}

function buildInClause(codes: string[]) {
  if (codes.length === 0) return "''"
  return codes.map(c => `'${c}'`).join(', ')
}

function getDateParams(c: any) {
  const from = c.req.query('from') || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  const to = c.req.query('to') || new Date().toISOString()
  return { from, to }
}

router.get('/summary', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const shortCodes = await getUserShortCodes(user.id)
  if (shortCodes.length === 0) return c.json({ total_clicks: 0, total_snips: 0, avg_clicks: 0 })
  try {
    const results = await queryAnalytics(`SELECT sum(_sample_interval) as total_clicks FROM ${DATASET} WHERE index1 IN (${buildInClause(shortCodes)}) AND timestamp >= '${from}' AND timestamp <= '${to}'`)
    const totalClicks = parseInt(results[0]?.total_clicks || '0', 10)
    return c.json({ total_clicks: totalClicks, total_snips: shortCodes.length, avg_clicks: shortCodes.length > 0 ? Math.round((totalClicks / shortCodes.length) * 10) / 10 : 0 })
  } catch { const events = await getRedisEvents(shortCodes, from, to); return c.json(redisSummary(events, shortCodes)) }
})

router.get('/daily', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const granularity = c.req.query('granularity') || 'day'
  const shortCodes = await getUserShortCodes(user.id)
  if (shortCodes.length === 0) return c.json([])
  try {
    let dateExpr = 'toStartOfDay(timestamp)'
    if (granularity === 'week') dateExpr = 'toStartOfWeek(timestamp)'
    if (granularity === 'month') dateExpr = 'toStartOfMonth(timestamp)'
    return c.json(await queryAnalytics(`SELECT ${dateExpr} as date, sum(_sample_interval) as clicks FROM ${DATASET} WHERE index1 IN (${buildInClause(shortCodes)}) AND timestamp >= '${from}' AND timestamp <= '${to}' GROUP BY date ORDER BY date ASC`))
  } catch { return c.json(redisDaily(await getRedisEvents(shortCodes, from, to), granularity)) }
})

router.get('/breakdown', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const by = c.req.query('by') || 'country'
  const shortCodes = await getUserShortCodes(user.id)
  if (shortCodes.length === 0) return c.json([])
  const fieldMap: Record<string, string> = { country: 'blob2', referrer: 'blob3', device: 'blob4', browser: 'blob5' }
  const field = fieldMap[by] || 'blob2'
  try {
    return c.json(await queryAnalytics(`SELECT ${field} as label, sum(_sample_interval) as clicks FROM ${DATASET} WHERE index1 IN (${buildInClause(shortCodes)}) AND ${field} != '' AND timestamp >= '${from}' AND timestamp <= '${to}' GROUP BY label ORDER BY clicks DESC LIMIT 10`))
  } catch { return c.json(redisBreakdown(await getRedisEvents(shortCodes, from, to), by)) }
})

router.get('/top-links', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const userUrls = await db.select().from(urls).where(eq(urls.user_id, user.id))
  const shortCodes = userUrls.map(u => u.short_code)
  if (shortCodes.length === 0) return c.json([])
  try {
    const results = await queryAnalytics(`SELECT blob1 as short_code, sum(_sample_interval) as clicks FROM ${DATASET} WHERE index1 IN (${buildInClause(shortCodes)}) AND timestamp >= '${from}' AND timestamp <= '${to}' GROUP BY short_code ORDER BY clicks DESC LIMIT 5`)
    return c.json(results.map(row => ({ short_code: row.short_code, long_url: userUrls.find(u => u.short_code === row.short_code)?.long_url || '', clicks: parseInt(row.clicks || '0', 10) })))
  } catch { return c.json(redisTopLinks(await getRedisEvents(shortCodes, from, to), userUrls)) }
})

router.get('/bulk-summary', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const shortCodesStr = c.req.query('short_codes')
  if (!shortCodesStr) return c.json({})
  const shortCodes = shortCodesStr.split(',').filter(Boolean)
  if (shortCodes.length === 0) return c.json({})
  const userUrls = await db.select({ short_code: urls.short_code }).from(urls).where(eq(urls.user_id, user.id))
  const userSet = new Set(userUrls.map(u => u.short_code))
  const valid = shortCodes.filter(code => userSet.has(code))
  if (valid.length === 0) return c.json({})
  try {
    const results = await queryAnalytics(`SELECT blob1 as short_code, sum(_sample_interval) as clicks FROM ${DATASET} WHERE index1 IN (${buildInClause(valid)}) AND timestamp >= '${from}' AND timestamp <= '${to}' GROUP BY short_code`)
    const response: Record<string, number> = {}
    valid.forEach(code => { response[code] = 0 })
    results.forEach(row => { response[row.short_code] = parseInt(row.clicks || '0', 10) })
    return c.json(response)
  } catch { return c.json(redisBulkSummary(await getRedisEvents(valid, from, to), valid)) }
})

router.get('/:short_code/summary', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const shortCode = c.req.param('short_code')
  const [dbUrl] = await db.select().from(urls).where(eq(urls.short_code, shortCode))
  if (!dbUrl || dbUrl.user_id !== user.id) return c.json({ message: 'Not Found' }, 404)
  try {
    const results = await queryAnalytics(`SELECT sum(_sample_interval) as total_clicks FROM ${DATASET} WHERE index1 = '${shortCode}' AND timestamp >= '${from}' AND timestamp <= '${to}'`)
    return c.json({ total_clicks: parseInt(results[0]?.total_clicks || '0', 10) })
  } catch { const events = await getRedisEvents([shortCode], from, to); return c.json({ total_clicks: events.length }) }
})

router.get('/:short_code/daily', async (c) => {
  const user = c.get('user')
  const { from, to } = getDateParams(c)
  const granularity = c.req.query('granularity') || 'day'
  const shortCode = c.req.param('short_code')
  const [dbUrl] = await db.select().from(urls).where(eq(urls.short_code, shortCode))
  if (!dbUrl || dbUrl.user_id !== user.id) return c.json({ message: 'Not Found' }, 404)
  try {
    let dateExpr = 'toStartOfDay(timestamp)'
    if (granularity === 'week') dateExpr = 'toStartOfWeek(timestamp)'
    if (granularity === 'month') dateExpr = 'toStartOfMonth(timestamp)'
    return c.json(await queryAnalytics(`SELECT ${dateExpr} as date, sum(_sample_interval) as clicks FROM ${DATASET} WHERE index1 = '${shortCode}' AND timestamp >= '${from}' AND timestamp <= '${to}' GROUP BY date ORDER BY date ASC`))
  } catch { return c.json(redisDaily(await getRedisEvents([shortCode], from, to), granularity)) }
})

export default router