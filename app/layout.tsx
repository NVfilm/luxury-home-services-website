import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SmartCare Technical Services - Premium Home Repair',
  description:
    'Expert AC, Refrigerator, Plumbing, Electrical & Appliance Repair Services',

  generator: 'v0.app',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],

    apple: '/apple-icon.png',
  },

  verification: {
    google: 'ZQ90Nhmw27hUF_gxONj4x_V3YkHHO59XlD9k6NpF3gA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
