FROM node:22-alpine AS builder

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy root configurations
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json* tsconfig.base.json ./

# Copy packages and the consumer app
COPY packages ./packages
COPY apps/consumer ./apps/consumer

# Install dependencies (respecting workspace)
RUN pnpm install --frozen-lockfile

# Build the consumer app
RUN pnpm --filter consumer build

# Deploy the consumer app (copies isolated prod deps and built files to a target directory)
RUN pnpm deploy --filter consumer --prod --legacy /prod/consumer

FROM node:22-alpine AS runner

WORKDIR /app

# Copy the deployed application from builder
COPY --from=builder /prod/consumer ./

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
