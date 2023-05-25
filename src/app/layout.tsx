import { ReactNode } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

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
        className={`${inter.className} h-screen w-full bg-zinc-800 text-zinc-100 flex flex-col items-center relative bg-[url(../assets/bg-stars.svg)]`}
      >
        <Analytics />
        <Header />
        <div className="-z-10 absolute right-1/2 top-1/2 h-1/4 w-1/3 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-80 blur-full" />

        {children}
        <Footer />
      </body>
    </html>
  )
}
