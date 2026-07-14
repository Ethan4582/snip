FROM node:22-alpine AS builder

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy root configurations
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json* tsconfig.base.json ./

# Copy packages and the api app
COPY packages ./packages
COPY apps/api ./apps/api

# Install dependencies (respecting workspace)
RUN pnpm install --frozen-lockfile

# Build the api app
RUN pnpm --filter api build

# Deploy the api app (copies isolated prod deps and built files to a target directory)
RUN pnpm deploy --filter api --prod --legacy /prod/api

FROM node:22-alpine AS runner

RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Copy the deployed application from builder
COPY --from=builder /prod/api ./

ENV NODE_ENV=production
EXPOSE 3001

CMD ["npx", "tsx", "src/index.ts"]
