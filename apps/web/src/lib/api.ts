import { supabase } from './supabase'

const BASE_URL = (process.env.NEXT_PUBLIC_API_URL as string) ?? 'http://localhost:3000'

async function getAuthHeader(): Promise<string> {
  const { data } = await supabase.auth.getSession()
  const token = data.session?.access_token
  if (!token) throw new Error('Not authenticated')
  return `Bearer ${token}`
}

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const authHeader = await getAuthHeader()
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authHeader,
      ...(init.headers ?? {}),
    },
  })
  const data = await res.json()
  if (!res.ok) throw Object.assign(new Error(data.message ?? 'API error'), { status: res.status, data })
  return data as T
}
