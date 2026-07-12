export interface Env {
  URL_CACHE: KVNamespace
  API_ORIGIN_URL: string
}

interface CachedUrl {
  long_url: string
  expires_at: string | null
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const shortCode = url.pathname.slice(1)

    if (!shortCode || shortCode === '') {
      return new Response('Not found', { status: 404 })
    }

    // 1. Check KV cache
    const cached = await env.URL_CACHE.get(shortCode)
    if (cached) {
      const data: CachedUrl = JSON.parse(cached)
      if (data.expires_at && new Date(data.expires_at) <= new Date()) {
        return new Response('Link has expired', { status: 410 })
      }
      return Response.redirect(data.long_url, 302)
    }

    // 2. KV miss — call origin API
    const apiUrl = `${env.API_ORIGIN_URL}/resolve/${shortCode}`
    let apiRes: Response
    try {
      apiRes = await fetch(apiUrl)
    } catch {
      return new Response('Service unavailable', { status: 502 })
    }

    if (apiRes.status === 404) return new Response('Link not found', { status: 404 })
    if (apiRes.status === 410) return new Response('Link has expired', { status: 410 })
    if (!apiRes.ok) return new Response('Service error', { status: 502 })

    const data: CachedUrl = await apiRes.json()

    // 3. Write to KV, then redirect
    const ttlSeconds = data.expires_at
      ? Math.max(60, Math.floor((new Date(data.expires_at).getTime() - Date.now()) / 1000))
      : 86400

    await env.URL_CACHE.put(shortCode, JSON.stringify(data), { expirationTtl: ttlSeconds })

    return Response.redirect(data.long_url, 302)
  },
}
