import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:code',
          destination: 'https://snip-edge.t7labs.workers.dev/:code',
        },
      ],
    }
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "snip",
  project: process.env.SENTRY_PROJECT || "snip-web",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
