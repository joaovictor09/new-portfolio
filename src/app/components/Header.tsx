'use client'

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  
  return (
    <header className=" flex items-center justify-center w-full py-3 shadow-md">
      <div className="flex gap-10 max-w-7xl">
        <Link 
          href="/" 
          className={`hover:text-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/' ? 'border-white' : 'hover:border-zinc-500'}`}
        >
          About me
        </Link>
        <Link 
          href="/projects"
          className={`hover:text-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/projects' ? 'border-white' : 'hover:border-zinc-500'}`}
        >
          Projects
        </Link>
        <Link 
          href="/contact"
          className={`hover:text-zinc-300 transition-all border-b border-transparent p-2 ${pathname == '/contact' ? 'border-white' : 'hover:border-zinc-500'}`}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}