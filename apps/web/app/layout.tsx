import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snip - URL Shortener',
  description: 'A fast, production-grade URL shortener with analytics. Capture links, organize them beautifully, and access anytime, anywhere.',
  openGraph: {
    title: 'Snip - URL Shortener',
    description: 'Capture links, organize them beautifully, and access anytime, anywhere.',
    url: 'https://snip.app',
    siteName: 'Snip',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snip - URL Shortener',
    description: 'Capture links, organize them beautifully, and access anytime, anywhere.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
