'use client'

import Link from 'next/link'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-500 flex justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="w-full max-w-7xl flex flex-col gap-2 sm:flex-row items-center justify-between p-5 text-zinc-100">
        <span>© {new Date().getFullYear()} John&apos;s Portfolio</span>

        <div className="flex items-center gap-2">
          <Link
            href="https://www.instagram.com/jooao.victor_/"
            className="hover:text-zinc-400 transition-all"
            target="_blank"
          >
            <InstagramLogo size={24} />
          </Link>
          <Link
            href="https://github.com/joaovictor09"
            className="hover:text-zinc-400 transition-all"
            target="_blank"
          >
            <GithubLogo size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaovictor09/"
            className="hover:text-zinc-400 transition-all"
            target="_blank"
          >
            <LinkedinLogo size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
