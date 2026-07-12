import { Redis } from '@upstash/redis/cloudflare'

export interface Env {
  URL_CACHE: KVNamespace
  API_ORIGIN_URL: string
  APP_URL: string
  UPSTASH_REDIS_REST_URL: string
  UPSTASH_REDIS_REST_TOKEN: string
}

async function publishClickEvent(env: Env, request: Request, shortCode: string) {
  try {
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    })
    
    const cf = (request as any).cf
    const country = cf?.country || 'Unknown'
    const referrer = request.headers.get('referer') || ''
    const userAgent = request.headers.get('user-agent') || ''
    
    await redis.xadd('click-events', '*', {
      short_code: shortCode,
      clicked_at: new Date().toISOString(),
      country,
      referrer,
      user_agent: userAgent
    })
  } catch (err) {
    // Fail silently so the redirect response isn't affected
    console.error('Analytics write failed', err)
  }
}

interface CachedUrl {
  long_url: string
  expires_at: string | null
}

function errorPage(title: string, message: string, status: number, appUrl: string) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #fafafa; color: #111; }
        .container { text-align: center; max-width: 400px; padding: 2.5rem 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); border: 1px solid #eaeaea; }
        h1 { margin-top: 0; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.025em; margin-bottom: 0.5rem; }
        p { color: #555; margin-bottom: 2rem; line-height: 1.5; font-size: 0.95rem; }
        a { display: inline-flex; align-items: center; justify-content: center; background-color: #000; color: #fff; text-decoration: none; padding: 0.625rem 1.25rem; border-radius: 6px; font-weight: 500; font-size: 0.875rem; transition: background-color 0.2s; }
        a:hover { background-color: #333; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${title}</h1>
        <p>${message}</p>
        <a href="${appUrl}">Return to Snip</a>
      </div>
    </body>
    </html>
  `
  return new Response(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    const shortCode = url.pathname.slice(1)
    const appUrl = env.APP_URL || 'http://localhost:5173'

    if (!shortCode || shortCode === '') {
      return errorPage('Not Found', 'The link you are looking for does not exist.', 404, appUrl)
    }

    // 1. Check KV cache
    const cached = await env.URL_CACHE.get(shortCode)
    if (cached) {
      const data: CachedUrl = JSON.parse(cached)
      if (data.expires_at && new Date(data.expires_at) <= new Date()) {
        return errorPage('Link Expired', 'This link has expired and is no longer available.', 410, appUrl)
      }
      ctx.waitUntil(publishClickEvent(env, request, shortCode))
      return Response.redirect(data.long_url, 302)
    }

    // 2. KV miss — call origin API
    const apiUrl = `${env.API_ORIGIN_URL}/resolve/${shortCode}`
    let apiRes: Response
    try {
      apiRes = await fetch(apiUrl)
    } catch {
      return errorPage('Service Unavailable', 'The URL resolution service is currently unavailable.', 502, appUrl)
    }

    if (apiRes.status === 404) return errorPage('Not Found', 'The link you are looking for does not exist.', 404, appUrl)
    if (apiRes.status === 410) return errorPage('Link Expired', 'This link has expired and is no longer available.', 410, appUrl)
    if (!apiRes.ok) return errorPage('Service Error', 'An unexpected error occurred while resolving the link.', 502, appUrl)

    const data: CachedUrl = await apiRes.json()

    // 3. Write to KV, then redirect
    const ttlSeconds = data.expires_at
      ? Math.max(60, Math.floor((new Date(data.expires_at).getTime() - Date.now()) / 1000))
      : 86400

    await env.URL_CACHE.put(shortCode, JSON.stringify(data), { expirationTtl: ttlSeconds })

    ctx.waitUntil(publishClickEvent(env, request, shortCode))
    return Response.redirect(data.long_url, 302)
  },
}
