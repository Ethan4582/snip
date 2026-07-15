import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicPaths = ['/dashboard', '/login', '/signup', '/settings', '/favorites', '/urls', '/_next', '/api', '/favicon.ico']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname === '/' ||
    publicPaths.some(p => pathname.startsWith(p)) ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // It's a short code! Forward the request to the edge worker.
  const targetUrl = `https://snip-edge.t7labs.workers.dev${pathname}`
  
  // Clone original headers so we preserve User-Agent, X-Forwarded-For, etc.
  const headers = new Headers(request.headers)
  
  // Cloudflare automatically sets cf-ipcountry in headers. 
  // By cloning request.headers, we pass it automatically!
  const country = request.headers.get('cf-ipcountry')
  if (country) headers.set('cf-ipcountry', country)
  
  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers,
      redirect: 'manual' // Return the 301/302 back to the user's browser natively
    })
    
    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    })
  } catch (err) {
    return NextResponse.next()
  }
}
