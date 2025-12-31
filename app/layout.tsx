import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MRE Blog App',
  description: 'Built with Next.js, TailwindCSS, TypeScript and MRE.',
  generator: 'MRE',
  applicationName: 'MRE Blog App',
  keywords: ['MRE', 'Next.js', 'TailwindCSS', 'TypeScript', 'Blog'],
  authors: [{ name: 'MRE', url: 'https://mrelvis.vercel.app' }],
  colorScheme: 'light dark',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
