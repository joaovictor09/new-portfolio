'use client'

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  
  return (
    <header className="flex items-center justify-center w-full py-3 shadow-md">
      <div className="flex gap-10">
        <Link 
          href="/" 
          className={`hover:text-zinc-300 hover:border-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/' ? 'border-white' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/projects"
          className={`hover:text-zinc-300 hover:border-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/projects' ? 'border-white' : ''}`}
        >
          Projects
        </Link>
        <Link 
          href="/contact"
          className="hover:text-zinc-300 hover:border-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/contact' ? 'border-white' : ''}"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}