import Link from 'next/link'
import { ReactNode } from 'react'

interface SocialLinkProps {
  children: ReactNode
  href: string
  name: string
}

export function SocialLink({ children, href, name }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`Link para a rede social ${name}`}
      className="transition-all hover:scale-110 hover:text-zinc-200"
      target="_blank"
    >
      {children}
    </Link>
  )
}
