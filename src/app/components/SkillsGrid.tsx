import Image from 'next/image'

import { SkillCard } from './SkillCard'
import astronaut from '../../assets/astronaut.webp'

import CssIcon from '../../assets/CSS3.svg'
import HTMLIcon from '../../assets/HTML5.svg'
import JavaScriptIcon from '../../assets/JavaScript.svg'
import NextIcon from '../../assets/Next.svg'
import NodeJsIcon from '../../assets/Nodejs.svg'
import ReactIcon from '../../assets/React.svg'
import TypescriptIcon from '../../assets/Typescript.svg'

export function SkillsGrid() {
  return (
    <div className="relative flex w-full max-w-7xl justify-center">
      {/* Astronaut */}
      <Image
        src={astronaut}
        className="absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/3 scale-75 "
        width={500}
        alt="Astronaut"
      />
      <div className="mt-5 flex w-full flex-col items-center gap-2 rounded border border-purple-600 bg-gradient-to-l from-purple-900 to-purple-900/80 p-5 pt-5 text-zinc-100 shadow-md shadow-purple-950">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="grid w-full  grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <SkillCard name="HTML" SkillIcon={HTMLIcon} />
          <SkillCard name="CSS" SkillIcon={CssIcon} />
          <SkillCard name="JavaScript" SkillIcon={JavaScriptIcon} />
          <SkillCard name="ReactJs" SkillIcon={ReactIcon} />
          <SkillCard name="Nextjs" SkillIcon={NextIcon} />
          <SkillCard name="Node" SkillIcon={NodeJsIcon} />
          <SkillCard name="Typescript" SkillIcon={TypescriptIcon} />
        </div>
      </div>
    </div>
  )
}
