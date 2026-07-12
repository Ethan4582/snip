import { Redis } from '@upstash/redis'
import * as dotenv from 'dotenv'
import { UAParser } from 'ua-parser-js'

dotenv.config()

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL!
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!
const INTERNAL_ANALYTICS_SECRET = process.env.INTERNAL_ANALYTICS_SECRET!
const EDGE_WORKER_URL = process.env.EDGE_WORKER_URL || 'http://127.0.0.1:8787'

const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
})

const STREAM_NAME = 'click-events'
const GROUP_NAME = 'snap-consumer-group'
const CONSUMER_NAME = `consumer-${Math.random().toString(36).substring(7)}`
const BATCH_SIZE = 50
const POLL_INTERVAL_MS = 3000

async function setupConsumerGroup() {
  try {
    // Create the consumer group, starting from '0' to pick up any old events
    await redis.xgroup('CREATE', STREAM_NAME, GROUP_NAME, '0', { MKSTREAM: true })
    console.log(`Consumer group ${GROUP_NAME} created.`)
  } catch (error: any) {
    if (error.message && error.message.includes('BUSYGROUP')) {
      console.log(`Consumer group ${GROUP_NAME} already exists.`)
    } else {
      console.error('Error creating consumer group:', error)
    }
  }
}

async function flushToEdgeWorker(events: any[]): Promise<boolean> {
  if (events.length === 0) return true

  const payload = events.map(event => {
    const ua = new UAParser(event.user_agent || '').getResult()
    return {
      short_code: event.short_code,
      country: event.country,
      referrer: event.referrer,
      device_type: ua.device.type || 'desktop',
      browser: ua.browser.name || 'unknown',
      clicked_at: event.clicked_at
    }
  })

  try {
    const res = await fetch(`${EDGE_WORKER_URL}/internal/analytics-write`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Internal-Secret': INTERNAL_ANALYTICS_SECRET
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      console.error(`Failed to flush to Edge Worker. Status: ${res.status}`)
      return false
    }
    return true
  } catch (err) {
    console.error('Error flushing to Edge Worker:', err)
    return false
  }
}

async function startPolling() {
  console.log(`Starting consumer ${CONSUMER_NAME}...`)
  
  while (true) {
    try {
      const result = await redis.xreadgroup(
        'GROUP', GROUP_NAME, CONSUMER_NAME,
        'COUNT', BATCH_SIZE,
        'BLOCK', POLL_INTERVAL_MS,
        'STREAMS', STREAM_NAME, '>'
      )

      if (result && result.length > 0) {
        const stream = result[0]
        // Upstash TS types can be tricky. Result is usually [streamName, messages[]]
        // messages is an array of [id, [field1, value1, field2, value2]]
        const messages = stream[1] as any[] 
        
        if (messages.length > 0) {
          console.log(`Received ${messages.length} events from stream.`)
          
          const parsedEvents = messages.map(msg => {
            const id = msg[0]
            const fields = msg[1]
            const eventObj: any = { _id: id }
            // If fields is an object (some Upstash wrappers parse it automatically)
            if (!Array.isArray(fields) && typeof fields === 'object') {
              Object.assign(eventObj, fields)
            } else if (Array.isArray(fields)) {
              for (let i = 0; i < fields.length; i += 2) {
                eventObj[fields[i]] = fields[i + 1]
              }
            }
            return eventObj
          })

          const success = await flushToEdgeWorker(parsedEvents)
          
          if (success) {
            const ids = parsedEvents.map(e => e._id)
            await redis.xack(STREAM_NAME, GROUP_NAME, ...ids)
            console.log(`Successfully acknowledged ${ids.length} events.`)
          }
        }
      }
    } catch (err) {
      console.error('Polling error:', err)
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

async function main() {
  await setupConsumerGroup()
  startPolling()
}

main().catch(console.error)
