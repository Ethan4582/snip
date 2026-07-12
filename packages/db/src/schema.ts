import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const urls = pgTable('urls', {
  id: uuid('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  short_code: text('short_code').notNull().unique(),
  long_url: text('long_url').notNull(),
  custom_alias: text('custom_alias').unique(),
  user_id: uuid('user_id').notNull(),
  expiration_date: timestamp('expiration_date', { withTimezone: true, mode: 'date' }),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'date' })
    .notNull()
    .default(sql`now()`),
})

export type Url = typeof urls.$inferSelect
export type NewUrl = typeof urls.$inferInsert
