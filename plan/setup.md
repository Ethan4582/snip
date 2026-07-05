# snip — Setup Guide

Companion to `plan.md`. This covers project scaffolding, tooling, and account
setup only — no feature implementation here.

---

## 1. Package manager

**pnpm**, with workspaces (monorepo). Root `pnpm-workspace.yaml` includes
`apps/*` and `packages/*`.

---

## 2. Repo structure

```
/apps
  /web        → frontend, Cloudflare Pages
  /api        → Hono app → Render (Write Service + Auth + Analytics API)
  /edge       → Hono app → Cloudflare Worker (redirect / Read Service)
  /consumer   → Redis Streams consumer → ClickHouse
/packages
  /db         → Drizzle schema + client (shared by /api and /consumer)
  /shared     → shared TS types (Url, ClickEvent, User, API contracts)
/infra
  /terraform  → Cloudflare resources (KV namespace, Worker route, DNS)
plan.md
setup.md
```

Each `/apps/*` package has its own `package.json`, its own Dockerfile (where
relevant), and its own deploy target. `/packages/*` are internal, imported via
pnpm workspace references — not published.

---

## 3. UI

## 3. UI

- **shadcn/ui** for all components — forms, tables, dialogs, and analytics
  widgets (charts, cards, stat displays). Use shadcn as the component
  primitive layer everywhere in `/apps/web`.
- **Design system: `skeuomorphic-ui`** — a local design-system file that will
  be added manually (not scaffolded by Claude). When building any UI in
  `/apps/web`, reference and follow the conventions in that file for visual
  styling (colors, shadows, textures, depth/skeuomorphic treatment) layered
  on top of shadcn's component structure. Do not invent a separate visual
  style — check `skeuomorphic-ui` first.

---

## 4. Accounts / services to set up before coding starts

Create free-tier accounts and capture credentials into `.env` (never commit).
Do all of this **before** asking Claude to write any feature code, so nothing
blocks mid-build waiting on a missing key.

| Service | Purpose | What to grab |
|---|---|---|
| Supabase | Postgres + Auth | Project URL, anon key, service role key, DB connection string |
| Upstash | Redis (cache, counter, streams) | REST URL, REST token |
| ClickHouse Cloud | Analytics store | Host, username, password, database name |
| Cloudflare | Workers, KV, Pages, DNS, WAF | Account ID, API token, zone ID (once domain is added) |
| Render | Hosting for `/api` and `/consumer` | Connected via GitHub repo, no manual keys needed upfront |
| Grafana Cloud | Metrics + logs | Stack URL, API key |
| Sentry | Error tracking | DSN per app (`/api`, `/edge`, `/web`) |
| GitHub | Repo + Actions | Repo created, Actions enabled |

### 4.1 Step-by-step: where to get each credential

**Supabase**
1. Create a project at supabase.com (free tier).
2. Project Settings → API → copy `Project URL`, `anon public` key, and
   `service_role` key (service role is server-only, never expose to `/apps/web`).
3. Project Settings → Database → copy the connection string
   (`DATABASE_URL`, use the pooled/transaction-mode URL, not the direct one,
   since Render will hold multiple connections).
4. Authentication → Providers → confirm Email (and any OAuth providers you
   want, e.g. Google) are enabled.

**Upstash**
1. Create a Redis database at upstash.com (free tier, choose a region close
   to your Render region to minimize latency).
2. Database → REST API section → copy `UPSTASH_REDIS_REST_URL` and
   `UPSTASH_REDIS_REST_TOKEN`.

**ClickHouse Cloud**
1. Create a free-tier service at clickhouse.cloud.
2. Once provisioned, go to Connect → copy `HOST`, default `USER` (usually
   `default`), and `PASSWORD` (shown once at creation — save it immediately).
3. Note the default database name (usually `default`, or create one named
   `snip`).

**Cloudflare**
1. Add your domain (or use a free `workers.dev` subdomain if you don't have
   one yet) in the Cloudflare dashboard.
2. My Profile → API Tokens → create a token with `Workers Scripts:Edit`,
   `Account Settings:Read`, and `Zone:DNS:Edit` permissions (scope to the one
   zone/account, don't use the Global API Key).
3. Copy `Account ID` (right sidebar of the dashboard) and `Zone ID` (once
   domain is added, on the domain overview page).
4. Workers & Pages → create a KV namespace for the redirect cache, copy its
   namespace ID.

**Render**
1. Create account at render.com, connect your GitHub account/repo.
2. No keys needed upfront — services are created from the dashboard pointing
   at the repo; environment variables are set per-service in Render's
   dashboard (paste in the values gathered above once services are created).

**Grafana Cloud**
1. Create a free-tier stack at grafana.com.
2. My Account → API Keys → create a key with `MetricsPublisher`/`Logs` write
   scope. Copy the stack's Prometheus/Loki push URLs from the stack details
   page along with the API key.

**Sentry**
1. Create a free-tier org at sentry.io.
2. Create one project per app (`snip-api`, `snip-edge`, `snip-web`) — each
   gives you a separate DSN. Copy each DSN into its app's `.env`.

**GitHub**
1. Create the repo, enable Actions (on by default for new repos).
2. Settings → Secrets and variables → Actions → add every credential above
   as a repo secret (matching the `.env` variable names) so CI/CD can inject
   them at build/deploy time.

### 4.2 Checklist before build starts

- [ ] All accounts created above
- [ ] All credentials copied into each app's `.env` (local dev)
- [ ] Same credentials added as GitHub Actions secrets (CI/CD)
- [ ] Same credentials added in Render's dashboard per service (runtime)
- [ ] Cloudflare KV namespace ID + Worker route noted for `/apps/edge` config
- [ ] ClickHouse tables/materialized view created (see plan.md Section 9)

---

## 5. Environment variables (high-level)

Each app gets its own `.env.example` — do not share one giant root `.env`.
Rough shape:

- `/apps/api`: `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
  `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `SENTRY_DSN`.
- `/apps/edge`: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`,
  `API_ORIGIN_URL` (fallback on cache miss), `SENTRY_DSN`.
- `/apps/consumer`: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`,
  `CLICKHOUSE_HOST`, `CLICKHOUSE_USER`, `CLICKHOUSE_PASSWORD`.
- `/apps/web`: `NEXT_PUBLIC_SUPABASE_URL` (or equivalent), `NEXT_PUBLIC_API_URL`.

---

## 6. Local tooling

- **Node version**: pin via `.nvmrc` (Node 22 LTS).
- **TypeScript**: shared `tsconfig.base.json` at root, extended by each app.
- **Linting/formatting**: ESLint + Prettier, single shared config at root.
- **Docker**: `/apps/api` and `/apps/consumer` each get a `Dockerfile`
  (Node base image + `@hono/node-server` for `/apps/api`).
- **Wrangler** (Cloudflare CLI): used for `/apps/edge` local dev + deploy.

---

## 7. CI/CD (GitHub Actions) — scope only

- On PR: install deps, lint, type-check, run tests.
- On merge to `main`:
  - Build + push Docker images for `/apps/api` and `/apps/consumer` →
    deploy to Render.
  - Deploy `/apps/edge` via Wrangler.
  - Deploy `/apps/web` via Cloudflare Pages (can also auto-deploy directly
    from Cloudflare's GitHub integration instead of Actions — decide during
    implementation).
  - Run `terraform plan`/`apply` for `/infra/terraform` if infra changed.

---

## 8. Order of setup (do this before any feature code)

1. Init monorepo: pnpm workspaces, root tsconfig/eslint/prettier.
2. Scaffold empty `/apps/*` and `/packages/*` with correct `package.json`s
   and workspace references.
3. Create all free-tier accounts (Section 4), populate `.env.example` files.
4. Set up Drizzle in `/packages/db`, confirm connection to Supabase Postgres.
5. Confirm Upstash Redis reachable (simple `PING` via REST).
6. Confirm ClickHouse Cloud reachable, create `click_events` table +
   `click_daily_rollup` materialized view (schema from `plan.md` Section 9).
7. Set up GitHub repo, enable Actions, add secrets for all the above.
8. Add `skeuomorphic-ui` file into `/apps/web` manually (user-provided).
9. Only after all of the above is green → start Phase 1 from `plan.md`
   (Section 8: Build Order).