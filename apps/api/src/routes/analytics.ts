import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq } from 'drizzle-orm'
import { authMiddleware, AuthUser } from '../middleware/auth'

type Env = { Variables: { user: AuthUser } }

const router = new Hono<Env>()

router.use('*', authMiddleware)

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID
const CF_ANALYTICS_API_TOKEN = process.env.CF_ANALYTICS_API_TOKEN
const DATASET = 'snap_click_events'

async function queryAnalytics(query: string) {
  if (!CF_ACCOUNT_ID || !CF_ANALYTICS_API_TOKEN) {
    throw new Error('Cloudflare Analytics Engine credentials missing')
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/analytics_engine/sql`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CF_ANALYTICS_API_TOKEN}`,
    },
    body: query
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Analytics query failed:', errorText)
    throw new Error('Analytics query failed')
  }

  const data = await response.json()
  return data.data as any[]
}

async function getUserShortCodes(userId: string) {
  const userUrls = await db.select({ short_code: urls.short_code }).from(urls).where(eq(urls.user_id, userId))
  return userUrls.map(u => u.short_code)
}

function buildInClause(shortCodes: string[]) {
  if (shortCodes.length === 0) return "''"
  return shortCodes.map(code => `'${code}'`).join(', ')
}

router.get('/summary', async (c) => {
  const user = c.get('user')
  const shortCodes = await getUserShortCodes(user.id)
  
  if (shortCodes.length === 0) {
    return c.json({ total_clicks: 0, total_snips: 0, avg_clicks: 0 })
  }

  const sql = `
    SELECT sum(_sample_interval) as total_clicks 
    FROM ${DATASET} 
    WHERE index1 IN (${buildInClause(shortCodes)})
  `
  
  const results = await queryAnalytics(sql)
  const totalClicks = parseInt(results[0]?.total_clicks || '0', 10)
  
  return c.json({
    total_clicks: totalClicks,
    total_snips: shortCodes.length,
    avg_clicks: shortCodes.length > 0 ? Math.round((totalClicks / shortCodes.length) * 10) / 10 : 0
  })
})

router.get('/daily', async (c) => {
  const user = c.get('user')
  const shortCodes = await getUserShortCodes(user.id)
  
  if (shortCodes.length === 0) return c.json([])

  const sql = `
    SELECT 
      toStartOfDay(timestamp) as date,
      sum(_sample_interval) as clicks
    FROM ${DATASET}
    WHERE index1 IN (${buildInClause(shortCodes)})
      AND timestamp >= NOW() - INTERVAL '30' DAY
    GROUP BY date
    ORDER BY date ASC
  `
  
  const results = await queryAnalytics(sql)
  return c.json(results)
})

router.get('/breakdown', async (c) => {
  const user = c.get('user')
  const by = c.req.query('by') || 'country'
  const shortCodes = await getUserShortCodes(user.id)
  
  if (shortCodes.length === 0) return c.json([])

  let field = 'blob2' // country
  if (by === 'referrer') field = 'blob3'
  if (by === 'device') field = 'blob4'
  if (by === 'browser') field = 'blob5'

  const sql = `
    SELECT 
      ${field} as label,
      sum(_sample_interval) as clicks
    FROM ${DATASET}
    WHERE index1 IN (${buildInClause(shortCodes)})
      AND ${field} != ''
    GROUP BY label
    ORDER BY clicks DESC
    LIMIT 10
  `
  
  const results = await queryAnalytics(sql)
  return c.json(results)
})

router.get('/top-links', async (c) => {
  const user = c.get('user')
  const userUrls = await db.select().from(urls).where(eq(urls.user_id, user.id))
  const shortCodes = userUrls.map(u => u.short_code)
  
  if (shortCodes.length === 0) return c.json([])

  const sql = `
    SELECT 
      blob1 as short_code,
      sum(_sample_interval) as clicks
    FROM ${DATASET}
    WHERE index1 IN (${buildInClause(shortCodes)})
    GROUP BY short_code
    ORDER BY clicks DESC
    LIMIT 5
  `
  
  const results = await queryAnalytics(sql)
  
  const response = results.map(row => {
    const dbUrl = userUrls.find(u => u.short_code === row.short_code)
    return {
      short_code: row.short_code,
      long_url: dbUrl?.long_url || '',
      clicks: parseInt(row.clicks || '0', 10)
    }
  })

  return c.json(response)
})

router.get('/:short_code/summary', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')
  
  const [dbUrl] = await db.select().from(urls).where(eq(urls.short_code, shortCode))
  if (!dbUrl || dbUrl.user_id !== user.id) {
    return c.json({ message: 'Not Found' }, 404)
  }

  const sql = `
    SELECT sum(_sample_interval) as total_clicks
    FROM ${DATASET}
    WHERE index1 = '${shortCode}'
  `
  const results = await queryAnalytics(sql)
  const totalClicks = parseInt(results[0]?.total_clicks || '0', 10)
  
  return c.json({ total_clicks: totalClicks })
})

router.get('/:short_code/daily', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')
  
  const [dbUrl] = await db.select().from(urls).where(eq(urls.short_code, shortCode))
  if (!dbUrl || dbUrl.user_id !== user.id) {
    return c.json({ message: 'Not Found' }, 404)
  }

  const sql = `
    SELECT 
      toStartOfDay(timestamp) as date,
      sum(_sample_interval) as clicks
    FROM ${DATASET}
    WHERE index1 = '${shortCode}'
      AND timestamp >= NOW() - INTERVAL '30' DAY
    GROUP BY date
    ORDER BY date ASC
  `
  const results = await queryAnalytics(sql)
  return c.json(results)
})

router.get('/bulk-summary', async (c) => {
  const user = c.get('user')
  const shortCodesStr = c.req.query('short_codes')
  
  if (!shortCodesStr) {
    return c.json({})
  }

  const shortCodes = shortCodesStr.split(',').filter(Boolean)
  if (shortCodes.length === 0) return c.json({})

  // Verify ownership
  const userUrls = await db
    .select({ short_code: urls.short_code })
    .from(urls)
    .where(eq(urls.user_id, user.id))
  
  const userShortCodes = new Set(userUrls.map(u => u.short_code))
  const validShortCodes = shortCodes.filter(code => userShortCodes.has(code))

  if (validShortCodes.length === 0) return c.json({})

  const sql = `
    SELECT 
      blob1 as short_code,
      sum(_sample_interval) as clicks
    FROM ${DATASET}
    WHERE index1 IN (${buildInClause(validShortCodes)})
    GROUP BY short_code
  `
  
  const results = await queryAnalytics(sql)
  
  const response: Record<string, number> = {}
  validShortCodes.forEach(code => {
    response[code] = 0
  })
  
  results.forEach(row => {
    response[row.short_code] = parseInt(row.clicks || '0', 10)
  })

  return c.json(response)
})

export default router
