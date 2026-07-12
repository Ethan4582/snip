import { Hono } from 'hono'
import { db, urls } from '@snip/db'
import { eq } from 'drizzle-orm'
import { authMiddleware, AuthUser } from '../middleware/auth'
import { createClient } from '@supabase/supabase-js'

type Env = { Variables: { user: AuthUser } }

const router = new Hono<Env>()

router.use('*', authMiddleware)

router.delete('/', async (c) => {
  const user = c.get('user')

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return c.json({ message: 'Server configuration error' }, 500)
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // 1. Delete all URLs for the user
  await db.delete(urls).where(eq(urls.user_id, user.id))

  // 2. Delete the user from Supabase Auth
  const { error } = await supabase.auth.admin.deleteUser(user.id)

  if (error) {
    console.error('Failed to delete Supabase user:', error)
    return c.json({ message: 'Failed to delete account' }, 500)
  }

  return c.json({ message: 'Account deleted successfully' })
})

export default router
