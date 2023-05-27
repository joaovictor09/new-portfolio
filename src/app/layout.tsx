import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

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
      <head>
        {/* Google Tag Manger */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-ND6XGJG');`}</Script>
      </head>
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
