import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex w-full justify-center border-t border-zinc-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-2 p-5 text-zinc-100 sm:flex-row">
        <span>© {new Date().getFullYear()} John&apos;s Portfolio</span>

        <div className="flex items-center gap-2">
          <Link
            href="https://www.instagram.com/jooao.victor_/"
            aria-label="My instagram profile"
            className="transition-all hover:text-zinc-400"
            target="_blank"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://github.com/joaovictor09"
            className="transition-all hover:text-zinc-400"
            aria-label="My github profile"
            target="_blank"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaovictor09/"
            aria-label="My linkedin profile"
            className="transition-all hover:text-zinc-400"
            target="_blank"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
