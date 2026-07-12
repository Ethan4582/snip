import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq, desc, and, count } from 'drizzle-orm'
import { authMiddleware, AuthUser } from '../middleware/auth'
import { getNextCounter, setCachedUrl } from '../lib/redis'
import { toBase62, validateAlias } from '../lib/shortcode'

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

  // Generated short code path — retry up to 3 times on collision
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
  const offset = (page - 1) * limit

  const whereCondition = isFavorite 
    ? and(eq(urls.user_id, user.id), eq(urls.is_favorite, true))
    : eq(urls.user_id, user.id)

  const rows = await db
    .select()
    .from(urls)
    .where(whereCondition)
    .orderBy(desc(urls.created_at))
    .limit(limit)
    .offset(offset)

  const [totalResult] = await db
    .select({ count: count() })
    .from(urls)
    .where(whereCondition)

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
})

router.patch('/:short_code/favorite', async (c) => {
  const user = c.get('user')
  const shortCode = c.req.param('short_code')
  
  // Also tolerate missing body, just toggle it if missing, or require it?
  // Let's require it.
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
