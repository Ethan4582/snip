import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq, desc, asc, and, count, ilike, or } from 'drizzle-orm'
import { authMiddleware, AuthUser } from '../middleware/auth'
import { getNextCounter, setCachedUrl, deleteCachedUrl } from '../lib/redis'
import { toBase62, validateAlias } from '../lib/shortcode'
import { getBulkClicks } from './analytics'

type Env = { Variables: { user: AuthUser } }

const router = new Hono<Env>()

router.use('*', authMiddleware)

router.post('/', async (c) => {
  const user = c.get('user')
  const body = await c.req.json<{
    long_url: string
    custom_alias?: string
    expiration_date?: string
  }>()

  // Validate long_url
  try {
    const u = new URL(body.long_url)
    if (!['http:', 'https:'].includes(u.protocol)) throw new Error()
  } catch {
    return c.json({ message: 'long_url must be a valid http(s) URL' }, 400)
  }

  // Validate expiration_date
  let expiration: Date | null = null
  if (body.expiration_date) {
    expiration = new Date(body.expiration_date)
    if (isNaN(expiration.getTime()) || expiration <= new Date()) {
      return c.json({ message: 'expiration_date must be a future ISO 8601 timestamp' }, 400)
    }
  }

  const baseUrl = process.env.BASE_URL ?? 'http://localhost:8787'

  // Custom alias path
  if (body.custom_alias) {
    const aliasError = validateAlias(body.custom_alias)
    if (aliasError) return c.json({ message: aliasError }, 400)

    try {
      const [row] = await db
        .insert(urls)
        .values({
          short_code: body.custom_alias,
          long_url: body.long_url,
          custom_alias: body.custom_alias,
          user_id: user.id,
          expiration_date: expiration,
        })
        .returning()

      await setCachedUrl(row.short_code, {
        long_url: row.long_url,
        expires_at: row.expiration_date?.toISOString() ?? null,
      }, expiration)

      return c.json(
        {
          short_code: row.short_code,
          short_url: `${baseUrl}/${row.short_code}`,
          long_url: row.long_url,
          expiration_date: row.expiration_date?.toISOString() ?? null,
        },
        201
      )
    } catch (err: unknown) {
      if (isUniqueViolation(err)) {
        return c.json({ message: 'Custom alias is already taken' }, 409)
      }
      throw err
    }
  }

  // Generated short code path
  for (let attempt = 0; attempt < 3; attempt++) {
    const counter = await getNextCounter()
    const shortCode = toBase62(counter)

    try {
      const [row] = await db
        .insert(urls)
        .values({
          short_code: shortCode,
          long_url: body.long_url,
          user_id: user.id,
          expiration_date: expiration,
        })
        .returning()

      await setCachedUrl(row.short_code, {
        long_url: row.long_url,
        expires_at: row.expiration_date?.toISOString() ?? null,
      }, expiration)

      return c.json(
        {
          short_code: row.short_code,
          short_url: `${baseUrl}/${row.short_code}`,
          long_url: row.long_url,
          expiration_date: row.expiration_date?.toISOString() ?? null,
        },
        201
      )
    } catch (err: unknown) {
      if (isUniqueViolation(err) && attempt < 2) continue
      throw err
    }
  }

  return c.json({ message: 'Failed to generate a unique short code, please try again' }, 500)
})

router.get('/', async (c) => {
  const user = c.get('user')
  const page = parseInt(c.req.query('page') || '1', 10)
  const limit = parseInt(c.req.query('limit') || '10', 10)
  const isFavorite = c.req.query('is_favorite') === 'true'
  const search = c.req.query('search')
  const sortBy = c.req.query('sort') || 'created_at' // 'created_at' | 'clicks'
  const sortOrder = c.req.query('order') || 'desc' // 'asc' | 'desc'
  const offset = (page - 1) * limit

  const searchCondition = search 
    ? or(ilike(urls.long_url, `%${search}%`), ilike(urls.short_code, `%${search}%`))
    : undefined

  const conditions = [
    eq(urls.user_id, user.id),
    isFavorite ? eq(urls.is_favorite, true) : undefined,
    searchCondition
  ].filter(Boolean)

  const whereCondition = and(...conditions)

  const [totalResult] = await db
    .select({ count: count() })
    .from(urls)
    .where(whereCondition)

  if (sortBy === 'clicks') {
    // Need to fetch ALL and sort in memory
    const allRows = await db
      .select()
      .from(urls)
      .where(whereCondition)
    
    if (allRows.length === 0) {
      return c.json({ data: [], total: 0, page, limit })
    }

    const shortCodes = allRows.map(r => r.short_code)
    const clicksMap = await getBulkClicks(shortCodes)

    const sortedRows = allRows.sort((a, b) => {
      const clicksA = clicksMap[a.short_code] || 0
      const clicksB = clicksMap[b.short_code] || 0
      if (sortOrder === 'asc') return clicksA - clicksB
      return clicksB - clicksA
    })

    const paginatedRows = sortedRows.slice(offset, offset + limit)

    return c.json({
      data: paginatedRows.map((r) => ({
        id: r.id,
        short_code: r.short_code,
        long_url: r.long_url,
        custom_alias: r.custom_alias,
        expiration_date: r.expiration_date?.toISOString() ?? null,
        is_favorite: r.is_favorite,
        created_at: r.created_at.toISOString(),
      })),
      total: totalResult.count,
      page,
      limit,
    })
  } else {
    // Sort by created_at in DB
    const rows = await db
      .select()
      .from(urls)
      .where(whereCondition)
      .orderBy(sortOrder === 'asc' ? asc(urls.created_at) : desc(urls.created_at))
      .limit(limit)
      .offset(offset)

    return c.json({
      data: rows.map((r) => ({
        id: r.id,
        short_code: r.short_code,
        long_url: r.long_url,
        custom_alias: r.custom_alias,
        expiration_date: r.expiration_date?.toISOString() ?? null,
        is_favorite: r.is_favorite,
        created_at: r.created_at.toISOString(),
      })),
      total: totalResult.count,
      page,
      limit,
    })
  }
})

router.patch('/:short_code', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')
  const body = await c.req.json<{ custom_alias: string }>()

  if (!body.custom_alias) {
    return c.json({ message: 'custom_alias is required' }, 400)
  }

  const aliasError = validateAlias(body.custom_alias)
  if (aliasError) return c.json({ message: aliasError }, 400)

  // Fetch the existing URL first to get its long_url
  const [existing] = await db
    .select()
    .from(urls)
    .where(and(eq(urls.user_id, user.id), eq(urls.short_code, shortCode)))

  if (!existing) {
    return c.json({ message: 'Not Found' }, 404)
  }

  try {
    const [updated] = await db
      .update(urls)
      .set({ 
        custom_alias: body.custom_alias,
        short_code: body.custom_alias 
      })
      .where(and(eq(urls.user_id, user.id), eq(urls.short_code, shortCode)))
      .returning()

    if (!updated) return c.json({ message: 'Not Found' }, 404)

    // Clear old cache, set new cache
    if (shortCode !== body.custom_alias) {
      await deleteCachedUrl(shortCode)
    }
    await setCachedUrl(updated.short_code, {
      long_url: updated.long_url,
      expires_at: updated.expiration_date?.toISOString() ?? null,
    }, updated.expiration_date)

    return c.json({
      short_code: updated.short_code,
      long_url: updated.long_url,
      custom_alias: updated.custom_alias,
      expiration_date: updated.expiration_date?.toISOString() ?? null,
    })
  } catch (err: unknown) {
    if (isUniqueViolation(err)) {
      return c.json({ message: 'Custom alias is already taken' }, 409)
    }
    throw err
  }
})

router.patch('/:short_code/favorite', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')
  const body = await c.req.json<{ is_favorite: boolean }>()

  const [updated] = await db
    .update(urls)
    .set({ is_favorite: body.is_favorite })
    .where(and(eq(urls.user_id, user.id), eq(urls.short_code, shortCode)))
    .returning()

  if (!updated) return c.json({ message: 'Not Found' }, 404)
  return c.json({ is_favorite: updated.is_favorite })
})

router.delete('/:short_code', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')

  const [deleted] = await db
    .delete(urls)
    .where(and(eq(urls.user_id, user.id), eq(urls.short_code, shortCode)))
    .returning()

  if (!deleted) return c.json({ message: 'Not Found' }, 404)
  
  await deleteCachedUrl(shortCode)
  
  return c.json({ message: 'Deleted successfully' })
})

function isUniqueViolation(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code: string }).code === '23505'
  )
}

export default router