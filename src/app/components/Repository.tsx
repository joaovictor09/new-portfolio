'use client'

import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'

interface RepositoryProps {
  id?: number
  name: string
  url: string
  description: string | null
  language: string | null
}

export function Repository({
  name,
  url,
  language,
  description,
}: RepositoryProps) {
  return (
    <div className="relative flex w-full flex-col gap-3 rounded-md border border-purple-950 bg-purple-800 p-5 transition-all hover:scale-105 hover:bg-transparent">
      <div className="absolute right-1/2 top-1/2 h-1/2 w-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-950 blur-3xl" />

      <div className="z-10 flex w-full items-center justify-between gap-5 text-zinc-100">
        <h1 className="text-lg font-bold">{name}</h1>
        <Link
          className="transition-all hover:text-zinc-300"
          target="_blank"
          href={url}
        >
          <GithubLogo size={24} />
        </Link>
      </div>
      <p className="z-10 text-zinc-300">
        {description == null ? 'Sem descrição' : description}
      </p>
      <span
        className={`z-10 before:mr-2 before:inline-block before:h-1 before:w-1 before:rounded-full before:p-1 before:content-[''] 
        ${
          language === 'TypeScript'
            ? 'before:bg-[#3e71a8]'
            : language === 'JavaScript'
            ? 'before:bg-[#f1e05a]'
            : language === 'HTML'
            ? 'before:bg-[#e34c26]'
            : 'before:bg-zinc-300'
        }
        text-zinc-300`}
      >
        {language == null ? 'Sem linguagem' : language}
      </span>
    </div>
  )
}
