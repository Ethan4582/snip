import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { lt } from 'drizzle-orm'
import { deleteCachedUrl } from '../lib/redis'

const router = new Hono()

// Basic internal secret middleware
router.use('*', async (c, next) => {
  const secret = c.req.header('x-internal-secret')
  if (!process.env.INTERNAL_SECRET || secret !== process.env.INTERNAL_SECRET) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  await next()
})

router.post('/cleanup-expired', async (c) => {
  try {
    // Find all expired URLs
    const expiredUrls = await db
      .select()
      .from(urls)
      .where(lt(urls.expiration_date, new Date()))

    if (expiredUrls.length === 0) {
      return c.json({ message: 'No expired links to clean up', count: 0 })
    }

    // Delete from PostgreSQL
    await db
      .delete(urls)
      .where(lt(urls.expiration_date, new Date()))

    // Delete from Redis / KV cache
    for (const row of expiredUrls) {
      await deleteCachedUrl(row.short_code)
    }

    return c.json({ 
      message: 'Cleanup successful', 
      count: expiredUrls.length 
    })
  } catch (err) {
    console.error('Cleanup failed:', err)
    return c.json({ message: 'Cleanup failed', error: String(err) }, 500)
  }
})

export default router
