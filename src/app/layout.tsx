import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "John's Portfolio",
  description: 'Porfolio made by John',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} h-screen w-full bg-zinc-700 text-zinc-100 flex flex-col items-center gap-10`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
