import { ReactNode } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

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
        className={`${inter.className} h-screen w-full bg-zinc-800 text-zinc-100 flex flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
