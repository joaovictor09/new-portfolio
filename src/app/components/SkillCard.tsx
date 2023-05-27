'use client'

import Image from 'next/image'

export interface SkillCardProps {
  name: string
  SkillIcon: any
}

export function SkillCard({ name, SkillIcon }: SkillCardProps) {
  return (
    <div className="group relative flex w-full items-center justify-center gap-2 overflow-clip rounded-lg border border-purple-950 bg-purple-800 py-5 transition-all hover:scale-105 hover:bg-purple-900 hover:bg-[url(../assets/bg-stars.svg)] hover:shadow-md">
      {/* <div className="absolute right-1/2 top-1/2 z-0 h-2/3 w-1/5 -translate-y-1/2 translate-x-1/2 rounded-full opacity-80 blur-2xl group-hover:bg-purple-700" /> */}

      <div className="absolute right-1/2 top-1/2 h-1/2 w-1/3 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-900 blur-xl" />

      <div className="stars group-hover:visited: invisible absolute z-20"></div>

      <Image
        src={SkillIcon}
        height={24}
        alt={`${name} logo`}
        className={`z-10 ${name === 'ReactJs' && 'animate-spin-slow'}`}
      />
      <span className="z-10 text-zinc-100">{name}</span>
    </div>
  )
}
