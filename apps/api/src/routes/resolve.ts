import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq } from 'drizzle-orm'
import { getCachedUrl, setCachedUrl } from '../lib/redis'

const router = new Hono()

router.get('/:short_code', async (c) => {
  const shortCode = c.req.param('short_code')

  // Check Redis cache first
  const cached = await getCachedUrl(shortCode)
  if (cached) {
    if (cached.expires_at && new Date(cached.expires_at) <= new Date()) {
      return c.json({ message: 'Link has expired' }, 410)
    }
    return c.json({ long_url: cached.long_url, expires_at: cached.expires_at })
  }

  // Cache miss — query Postgres
  const [row] = await db.select().from(urls).where(eq(urls.short_code, shortCode)).limit(1)

  if (!row) return c.json({ message: 'Link not found' }, 404)

  const expiresAt = row.expiration_date?.toISOString() ?? null

  if (row.expiration_date && row.expiration_date <= new Date()) {
    return c.json({ message: 'Link has expired' }, 410)
  }

  // Populate cache before returning
  await setCachedUrl(shortCode, { long_url: row.long_url, expires_at: expiresAt }, row.expiration_date ?? null)

  return c.json({ long_url: row.long_url, expires_at: expiresAt })
})

export default router
