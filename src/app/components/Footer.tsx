'use client'

import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer(){
  return (
    <footer className="w-full max-w-7xl flex items-center justify-between p-5 text-zinc-100">
      <span>© {new Date().getFullYear()} John&apos;s Portfolio</span>

      <div className="flex items-center gap-2">
        <Link href="https://www.instagram.com/jooao.victor_/" className="hover:text-zinc-400 transition-all" target="_blank">
          <InstagramLogo size={24}/>
        </Link>
        <Link href="https://github.com/joaovictor09" className="hover:text-zinc-400 transition-all" target="_blank">
          <GithubLogo size={24}/>
        </Link>
        <Link href="https://www.linkedin.com/in/joaovictor09/" className="hover:text-zinc-400 transition-all" target="_blank">
          <LinkedinLogo size={24}/>
        </Link>
      </div>
    </footer>
  )
}