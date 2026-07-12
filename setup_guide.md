# App Setup and Run Guide

Follow these steps to finish setting up the environment variables, run the database migrations, and start the servers.

## 1. Database Setup (Supabase)

You encountered an error running `pnpm db:migrate` because the database URL was missing.

1. Create a `.env` file in the `packages/db` folder:
   - File: `packages/db/.env`
2. Add your Supabase connection string to it:
   ```env
   DATABASE_URL="postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"
   ```
3. Run the migration to create the `urls` table:
   ```bash
   pnpm db:migrate
   ```

## 2. API Setup

The main API connects to Supabase and Redis.

1. Ensure `apps/api/.env` is fully populated. It should look something like this:
   ```env
   PORT=3000
   SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
   SUPABASE_SERVICE_ROLE_KEY="[YOUR-SERVICE-ROLE-KEY]"
   UPSTASH_REDIS_REST_URL="[YOUR-UPSTASH-URL]"
   UPSTASH_REDIS_REST_TOKEN="[YOUR-UPSTASH-TOKEN]"
   BASE_URL="http://localhost:8787" # The URL of your edge worker
   ```

## 3. Cloudflare Worker Setup (Edge)

The edge worker uses Cloudflare KV to cache shortened URLs for fast redirects.

1. Open your terminal in the root directory and run the following command to create a KV namespace:
   ```bash
   pnpm --filter edge exec wrangler kv:namespace create URL_CACHE
   ```
2. The command output will give you an `id`. Copy that ID.
3. Open `apps/edge/wrangler.toml`.
4. Replace `YOUR_KV_NAMESPACE_ID` and `YOUR_KV_PREVIEW_NAMESPACE_ID` with the ID you copied:
   ```toml
   [[kv_namespaces]]
   binding = "URL_CACHE"
   id = "the-id-you-copied"
   preview_id = "the-id-you-copied" # You can use the same for local dev
   ```

## 4. Web Setup

1. Check your `apps/web/.env` file. We renamed the keys to use the `VITE_` prefix. Ensure they are correct:
   ```env
   VITE_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
   VITE_SUPABASE_ANON_KEY="[YOUR-ANON-KEY]"
   VITE_API_URL="http://localhost:3000"
   VITE_EDGE_URL="http://localhost:8787"
   ```

## 5. Running the App

You can run the different parts of the application in separate terminal windows. 

**Run the API:**
```bash
pnpm api:dev
```

**Run the Edge Worker:**
```bash
pnpm edge:dev
```

**Run the Web App:**
```bash
pnpm web:dev
```

Once running, you can visit the web app at `http://localhost:5173`.
