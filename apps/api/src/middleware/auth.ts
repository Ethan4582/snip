import { createMiddleware } from 'hono/factory'
import { supabaseAdmin } from '../lib/supabase'

export type AuthUser = { id: string; email: string | undefined }

type Env = { Variables: { user: AuthUser } }

export const authMiddleware = createMiddleware<Env>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  const token = authHeader.slice(7)
  const { data, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !data.user) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  c.set('user', { id: data.user.id, email: data.user.email })
  return next()
})
