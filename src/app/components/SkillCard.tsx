'use client'

import Image from 'next/image'

export interface SkillCardProps {
  name: string
  SkillIcon: any
}

export function SkillCard({ name, SkillIcon }: SkillCardProps) {
  return (
    <div className="group relative hover:scale-105 w-full flex items-center justify-center gap-2 py-5 bg-zinc-600/80 border border-zinc-500 rounded-lg hover:shadow-md hover:bg-[url(../assets/bg-stars.svg)] transition-all overflow-clip">
      <div className="absolute z-0 right-1/2 top-1/2 w-1/5 h-2/3 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-purple-700 opacity-80 blur-2xl" />
      <Image
        src={SkillIcon}
        height={24}
        alt={`${name} logo`}
        className="z-10"
      />
      <span className="text-zinc-100 z-10">{name}</span>
    </div>
  )
}
