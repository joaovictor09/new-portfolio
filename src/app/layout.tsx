import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "John's Portfolio",
  description: 'Porfolio made by John',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} max-w-screen relative flex h-screen flex-1 flex-col items-center overflow-x-clip bg-gradient-radial from-purple-950 to-gray-900 bg-clip-content text-zinc-100`}
      >
        <Analytics />
        {/* Stars */}
        <div className="stars absolute right-0"></div>
        <div className="stars absolute left-0"></div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
