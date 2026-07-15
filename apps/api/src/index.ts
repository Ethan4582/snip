import 'dotenv/config'
import * as Sentry from '@sentry/node'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import urlsRouter from './routes/urls'
import resolveRouter from './routes/resolve'
import healthRouter from './routes/health'
import analyticsRouter from './routes/analytics'
import accountRouter from './routes/account'
import internalRouter from './routes/internal'

const app = new Hono()

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development'
  })
}

app.use('*', logger())
app.use('*', async (c, next) => {
  try {
    await next()
  } catch (err) {
    if (process.env.SENTRY_DSN) {
      Sentry.captureException(err)
    }
    throw err
  }
})
app.use(
  '*',
  cors({
    origin: process.env.CORS_ORIGIN ?? '*',
    allowHeaders: ['Authorization', 'Content-Type'],
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  })
)

app.route('/urls', urlsRouter)
app.route('/resolve', resolveRouter)
app.route('/health', healthRouter)
app.route('/analytics', analyticsRouter)
app.route('/account', accountRouter)
app.route('/internal', internalRouter)

const port = Number(process.env.PORT ?? 3000)
console.log(`API listening on port ${port}`)

serve({ fetch: app.fetch, port })
