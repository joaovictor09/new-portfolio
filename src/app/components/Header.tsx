'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-center w-full p-5 py-3 shadow-md border-b border-zinc-500">
      <div className="flex flex-col md:flex-row gap-2 items-center text-center md:gap-10 max-w-7xl">
        <Link
          href="/"
          className={`hover:text-zinc-100 transition-all border-b border-transparent p-2 ${
            pathname === '/'
              ? 'border-white'
              : 'hover:border-zinc-500 text-zinc-300'
          }`}
        >
          About me
        </Link>
        <Link
          href="/projects"
          className={`hover:text-zinc-100 transition-all border-b border-transparent p-2 ${
            pathname === '/projects'
              ? 'border-white'
              : 'hover:border-zinc-500 text-zinc-300'
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`hover:text-zinc-100 transition-all border-b border-transparent p-2 ${
            pathname === '/contact'
              ? 'border-white'
              : 'hover:border-zinc-500 text-zinc-300'
          }`}
        >
          Contact
        </Link>
        <Link
          href="/comments"
          className={`hover:text-zinc-100 transition-all border-b border-transparent p-2 ${
            pathname === '/comments'
              ? 'border-white'
              : 'hover:border-zinc-500 text-zinc-300'
          }`}
        >
          Comments
        </Link>
      </div>
    </header>
  )
}
