'use client'

import Image from 'next/image'

export interface SkillCardProps {
  name: string
  SkillIcon: any
}

export function SkillCard({ name, SkillIcon }: SkillCardProps) {
  return (
    <div className="hover:scale-105 w-full flex items-center justify-center gap-2 py-5 bg-zinc-600 border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 transition-all">
      <Image src={SkillIcon} height={24} alt={`${name} logo`} />
      <span className="text-zinc-100 ">{name}</span>
    </div>
  )
}
