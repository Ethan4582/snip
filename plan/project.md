# snip — Production-Grade Resume Project — Blueprint

## 1. What we're building
**snip** is a Bitly-style URL shortener with click analytics and auth. Not a
SaaS product — a personal-use, portfolio-quality system demonstrating
production architecture patterns, built entirely on free tiers.

---

## 2. Functional Requirements

- Users can sign up / log in (Supabase Auth).
- Authenticated users can submit a long URL and get a short URL.
  - Optional custom alias.
  - Optional expiration date.
- Anyone can visit a short URL and get redirected (302) to the original.
- Analytics per short URL: click count, timestamp, geography (from IP),
  referrer, device/browser (from User-Agent). Viewable on a dashboard.

### Out of scope (for v1)
- Spam/malicious URL detection.
- Real-time (sub-second) analytics consistency — eventual consistency is fine.
- Payments / multi-tenant billing.

---

## 3. Non-Functional Requirements

- Redirect latency: as low as possible — target <100ms server-side, ideally
  served from Cloudflare edge cache for hot links.
- Availability > strict consistency (CAP tradeoff) — matches URL shortener
  use case (a few seconds of staleness on a new link is acceptable).
- Short codes must be globally unique.
- System should be documented well enough to explain every tradeoff in an
  interview (README will include an "Architecture Decisions" section).

---

## 4. Core Entities

- **User** — id, email, created_at (managed by Supabase Auth).
- **Url** — id, short_code, long_url, custom_alias, user_id, expiration_date, created_at.
- **ClickEvent** — short_code, timestamp, ip (hashed/truncated for privacy),
  country, city, referrer, user_agent, device_type.

---

## 5. Tech Stack (all free tier)

| Layer | Choice | Why |
|---|---|---|
| API framework | **Hono** (Node/TS) | Runs unchanged on Render (Node) and Cloudflare Workers — one codebase, two runtimes |
| Backend host | **Render** (Docker) | Free tier, long-running containers, good for Write Service + Analytics API |
| Edge/Redirect | **Cloudflare Workers + KV** | Hot-path redirect served at the edge, cache-first, falls back to origin |
| Gateway/CDN | **Cloudflare** (WAF, rate limiting, DNS) | Edge protection, also fronts frontend |
| Reverse proxy | **Nginx** (in Docker network) | Internal routing between Read/Write services on Render |
| Database | **Supabase Postgres** | Source of truth for Url + User data |
| Auth | **Supabase Auth** | Don't roll our own auth |
| Cache + Counter | **Upstash Redis** (HTTP-based, edge-compatible) | Short code counter (atomic INCR), hot URL cache |
| Event stream | **Redis Streams** (via Upstash) | Click events published async, consumed into analytics store |
| Analytics store | **ClickHouse Cloud** (free tier) | OLAP store for click aggregates (by day/country/referrer) |
| Frontend | **Cloudflare Pages** | Dashboard UI (submit URL, view analytics) |
| ORM | **Drizzle ORM** | Lightweight, edge-compatible, works with Postgres over HTTP |
| CI/CD | **GitHub Actions** | Test → build Docker image → deploy to Render / push Worker |
| IaC | **Terraform** (Cloudflare resources) | KV namespaces, Worker routes, DNS — version controlled |
| Observability | **Grafana Cloud** (metrics+logs) + **Sentry** (errors) | Free tier, real production tool combo |
| Containerization | **Docker** | Render deployment, portability |

---

## 6. Architecture — How it fits together

```
                          ┌─────────────────────┐
                          │   Cloudflare (edge)  │
                          │  WAF / Rate Limit    │
                          └──────────┬───────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │                                 │
           GET /{short_code}                   POST /urls, /auth/*, /dashboard/*
                    │                                 │
         ┌──────────▼──────────┐            ┌─────────▼──────────┐
         │ Cloudflare Worker    │            │  Render (Docker)   │
         │ (Read Service - edge)│            │  Nginx → Hono app  │
         │                      │            │  (Write + Auth +   │
         │ 1. Check KV cache    │            │   Analytics API)   │
         │ 2. HIT → 302 redirect│            └─────────┬──────────┘
         │ 3. MISS → call       │                      │
         │    Render API        │           ┌──────────┼───────────┐
         │ 4. Publish click     │           │          │           │
         │    event → Redis     │      Supabase    Upstash     ClickHouse
         │    Streams (async)   │      Postgres    Redis        Cloud
         └──────────┬───────────┘      (Url/User) (counter,    (click
                    │                              cache, TTL)  aggregates)
                    │
         ┌──────────▼───────────┐
         │  Stream Consumer      │
         │ (small worker service,│
         │  runs on Render)      │
         │  Redis Streams →      │
         │  batch insert →       │
         │  ClickHouse           │
         └────────────────────────┘

Frontend: Cloudflare Pages → calls Render API (auth, create URL, view analytics)
```

### Request flows

**Create short URL** (authenticated):
Frontend → Cloudflare → Render (Hono, Write Service) → validate → Supabase Auth
check → get next counter batch from Upstash Redis → base62 encode → insert into
Postgres (UNIQUE constraint on short_code) → return short URL.

**Redirect** (public, hot path):
Browser → Cloudflare Worker → check KV cache → if hit, 302 immediately +
async-publish click event to Redis Streams → if miss, call Render read
endpoint, get long_url from Postgres/Upstash cache, populate KV, then redirect.

**Analytics pipeline**:
Redis Streams (click-events) → Consumer service (Render, small Node process
using consumer groups) → batches events → inserts into ClickHouse → Analytics
API queries ClickHouse aggregates → Dashboard (Cloudflare Pages) displays.

---

## 7. Key Design Decisions (for interview/README)

- **Short code generation**: counter-based (Redis atomic INCR) + base62
  encoding, with counter batching (fetch 1000 at a time) to reduce Redis
  round-trips. UNIQUE constraint on `short_code` in Postgres is the real
  correctness guarantee — cache/counter logic is an optimization, not the
  source of truth.
- **302 not 301**: needed for analytics — 301 gets cached by browsers and
  bypasses our server on repeat visits.
- **Redis Streams over Kafka**: at this scale, Kafka's operational overhead
  isn't justified. Redis Streams gives at-least-once delivery + consumer
  groups using infra we already run (Upstash).
- **Cloudflare Workers for redirect, Render for everything else**: hot path
  (redirect) benefits most from edge latency; writes/auth/analytics queries
  are lower-volume and fine on a centralized service.
- **Custom alias race condition**: never rely on read-before-write alone.
  Insert directly with a UNIQUE constraint (or `INSERT ... ON CONFLICT`) and
  handle the conflict — the database is the single source of truth for
  uniqueness.
- **Postgres driver for edge compatibility**: Worker never opens a raw TCP
  connection to Postgres (not supported on Workers) — cache-miss fallback
  calls the Render API over HTTP instead of querying Postgres directly.

---

## 8. Build Order (phases)

1. **Core (no analytics yet)**: Postgres schema (Drizzle), Supabase Auth
   wiring, Hono Write Service (create URL) + Read Service (redirect) on
   Render only. Get end-to-end create → redirect working.
2. **Caching**: Add Upstash Redis for counter + short_code→long_url cache.
3. **Edge**: Move redirect to Cloudflare Worker + KV, with Render as
   cache-miss fallback.
4. **Analytics pipeline**: Redis Streams producer (on redirect) → consumer
   service → ClickHouse → analytics query API.
5. **Frontend**: Cloudflare Pages dashboard — submit URL form, list of URLs,
   analytics charts per URL.
6. **Production hardening**: Docker + GitHub Actions CI/CD, Terraform for
   Cloudflare resources, Grafana Cloud + Sentry observability, Nginx internal
   routing on Render.

---

## 9. Decisions (resolved)

**Postgres layer: Drizzle ORM** — chosen over raw SQL. Type-safe schema,
edge-compatible query builder, migration tooling included. Raw SQL only for
one-off analytical queries against ClickHouse (no ORM needed there).

**ClickHouse schema:**
- `click_events` (raw, append-only): `short_code`, `clicked_at` (DateTime),
  `country` (from Cloudflare header), `referrer`, `device_type`, `browser`,
  `user_id_owner` (owner of the short link, for per-user dashboards).
  Engine: `MergeTree`, partitioned by month, ordered by `(short_code, clicked_at)`.
- `click_daily_rollup` (materialized view, auto-populated from raw table):
  `short_code`, `date`, `country`, `click_count`. Engine: `SummingMergeTree`.
  Dashboard queries hit this rollup, not the raw table, for speed.
- Raw table kept for drill-down/debugging; rollup is what the analytics API
  actually queries for charts.

**IP geolocation: Cloudflare `cf-ipcountry` header** — no separate GeoIP
service needed. Cloudflare sits in front of every request (Worker, and Render
traffic via Cloudflare DNS/proxy) and injects country info for free.
City-level geo is dropped from v1 scope — country-level is enough for a
portfolio project and avoids paying for a GeoIP database/service.

**Repo structure: monorepo.**
```
/apps
  /web        → frontend (Cloudflare Pages)
  /api        → Hono app, deployed to Render (Write + Auth + Analytics API)
  /edge       → Hono app, deployed to Cloudflare Worker (redirect/Read Service)
  /consumer   → Redis Streams consumer → ClickHouse (small Node service, Render)
/packages
  /db         → Drizzle schema + client, shared by /api and /consumer
  /shared     → shared types (Url, ClickEvent, etc.)
/infra
  /terraform  → Cloudflare resources (KV namespace, Worker routes, DNS)
```
`/api` and `/edge` both import shared Hono route logic where possible; each
has its own thin entrypoint file for its runtime adapter.