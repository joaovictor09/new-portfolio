"use client"

import Link from "next/link";
import { GithubLogo } from 'phosphor-react'

interface RepositoryProps {
  id?: number;
  name: string;
  url: string;
  description: string | null;
  language: string;
}

export function Repository({ name,url,language, description }: RepositoryProps) {
  return (
    <div className="flex flex-col gap-3 w-full border border-zinc-500 bg-zinc-700 p-5 rounded-md transition-all hover:scale-105">
      <div className="w-full flex justify-between items-center text-zinc-100 gap-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <Link className="hover:text-zinc-400 transition-all" target="_blank" href={url}>
          <GithubLogo size={24}/>
        </Link>
      </div>
      <p className="text-zinc-400">
        {description == null ? 'Sem descrição' : description}
      </p>
      <span 
        className={`before:content-[''] before:inline-block before:p-1 before:w-1 before:h-1 before:rounded-full before:mr-2 
        ${language == 'TypeScript' ? 'before:bg-[#3178c6]' : language == 'JavaScript' ?  'before:bg-[#f1e05a]' : language == 'HTML' ? 'before:bg-[#e34c26]' : 'before:bg-zinc-400'}
        text-zinc-400`}
      >
        {language == null ? 'Sem linguagem' : language}
      </span>
    </div>
  )
}