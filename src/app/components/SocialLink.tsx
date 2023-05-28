import Link from 'next/link'
import { ReactNode } from 'react'

interface SocialLinkProps {
  children: ReactNode
  href: string
}

export function SocialLink({ children, href }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="transition-all hover:scale-110 hover:text-zinc-200"
      target="_blank"
    >
      {children}
    </Link>
  )
}
