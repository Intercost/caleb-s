import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jet-brains-mono',
})

export const metadata: Metadata = {
  title: 'Caleb Howard | Portfolio',
  description: 'A driven innovator, developer, and problem solver passionate about leveraging technology to create impactful solutions.',
  keywords: ['portfolio', 'developer', 'ai', 'innovation', 'web development'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366F1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <head />
      <body className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen bg-darkbg text-lighttext dark`}>
        <ThemeProviderWrapper>
          <Navigation />
          <main className="pt-20 pb-16">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
