'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [headerVisibility, setHeaderVisibility] = useState(false)

  return (
    <header className="flex w-full items-center justify-center border-b border-zinc-500 p-5 py-3 shadow-md">
      {/* Desktop Header */}

      <div className="hidden max-w-7xl flex-col items-center gap-2 text-center sm:visible sm:flex sm:flex-row">
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

      {/* Mobile Header */}

      <div className="flex w-full max-w-7xl flex-col items-center gap-2 text-center sm:hidden">
        <div className="flex w-full items-center justify-end">
          <button onClick={() => setHeaderVisibility(!headerVisibility)}>
            {headerVisibility ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`${
            headerVisibility ? 'flex' : 'hidden'
          } w-full flex-col items-center md:gap-10`}
        >
          <Link
            href="/"
            className={`w-max border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
              pathname === '/'
                ? 'border-white'
                : 'text-zinc-300 hover:border-zinc-500'
            }`}
          >
            About me
          </Link>
          <Link
            href="/projects"
            className={`w-max border-b border-transparent p-2 transition-all hover:text-zinc-100 ${
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
      </div>
    </header>
  )
}
