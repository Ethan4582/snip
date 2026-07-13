import { Redis } from '@upstash/redis'

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Upstash Redis env vars are required')
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const COUNTER_KEY = 'counter:short_code'
const BATCH_SIZE = 1000

let batchStart = 0
let batchEnd = 0

export async function getNextCounter(): Promise<number> {
  if (batchStart >= batchEnd) {
    const upper = await redis.incrby(COUNTER_KEY, BATCH_SIZE)
    batchEnd = upper
    batchStart = upper - BATCH_SIZE + 1
  }
  return batchStart++
}

export interface CachedUrl {
  long_url: string
  expires_at: string | null
}

export async function getCachedUrl(shortCode: string): Promise<CachedUrl | null> {
  return redis.get<CachedUrl>(`url:${shortCode}`)
}

export async function setCachedUrl(shortCode: string, value: CachedUrl, expiresAt: Date | null) {
  const ttlSeconds = expiresAt
    ? Math.max(1, Math.floor((expiresAt.getTime() - Date.now()) / 1000))
    : 86400
  await redis.set(`url:${shortCode}`, value, { ex: ttlSeconds })
}

export async function deleteCachedUrl(shortCode: string) {
  await redis.del(`url:${shortCode}`)
}
