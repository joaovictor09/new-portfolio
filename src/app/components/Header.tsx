'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex w-full items-center justify-center border-b border-zinc-500 p-5 py-3 shadow-md">
      <div className="flex max-w-7xl flex-col items-center gap-2 text-center md:flex-row md:gap-10">
        <Link
          href="/"
          className={`border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
            pathname === '/'
              ? 'border-white'
              : 'text-zinc-300 hover:border-zinc-500'
          }`}
        >
          About me
        </Link>
        <Link
          href="/projects"
          className={`border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
            pathname === '/projects'
              ? 'border-white'
              : 'text-zinc-300 hover:border-zinc-500'
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
            pathname === '/contact'
              ? 'border-white'
              : 'text-zinc-300 hover:border-zinc-500'
          }`}
        >
          Contact
        </Link>
        <Link
          href="/comments"
          className={`border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
            pathname === '/comments'
              ? 'border-white'
              : 'text-zinc-300 hover:border-zinc-500'
          }`}
        >
          Comments
        </Link>
      </div>
    </header>
  )
}
