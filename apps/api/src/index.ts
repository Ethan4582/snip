import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import urlsRouter from './routes/urls'
import resolveRouter from './routes/resolve'
import healthRouter from './routes/health'

const app = new Hono()

app.use('*', logger())
app.use(
  '*',
  cors({
    origin: process.env.CORS_ORIGIN ?? '*',
    allowHeaders: ['Authorization', 'Content-Type'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
  })
)

app.route('/urls', urlsRouter)
app.route('/resolve', resolveRouter)
app.route('/health', healthRouter)

const port = Number(process.env.PORT ?? 3000)
console.log(`API listening on port ${port}`)

serve({ fetch: app.fetch, port })
