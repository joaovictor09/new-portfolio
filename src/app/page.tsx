import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'

import CssIcon from '../assets/CSS3.svg'
import HTMLIcon from '../assets/HTML5.svg'
import JavaScriptIcon from '../assets/JavaScript.svg'
import NextIcon from '../assets/Next.svg'
import NodeJsIcon from '../assets/Nodejs.svg'
import ReactIcon from '../assets/React.svg'
import TypescriptIcon from '../assets/Typescript.svg'
import githubPhoto from '../assets/github-profile-image.jpeg'

import { SkillCard } from './components/SkillCard'
import { Contact } from './components/Contact'

export default async function Home() {
  return (
    <div className="my-10 w-full max-w-7xl flex-1 flex-col items-center px-5">
      {/* About me */}

      <div className="flex flex-col items-center gap-5 rounded border-b border-zinc-500 bg-zinc-700/80 p-5 shadow-md">
        <Image
          src={githubPhoto}
          width={200}
          height={200}
          alt="My profile photo"
          className="rounded-full"
        />
        <div className="flex max-w-xl flex-col gap-2 text-center">
          <h1 className="flex items-center justify-center text-xl font-bold">
            Hey, I&apos;m John <div className="animate-wiggle"> 👋</div>
          </h1>
          <p className="text-zinc-400">
            I&apos;m a software developer based in Criciúma, Santa Catarina. I
            specialize in building (and occasionally designing) exceptional
            websites, applications, and everything in between.
          </p>
        </div>

        {/* Socials */}

        <div className="flex items-center gap-2 text-zinc-400">
          <Link
            href="https://www.instagram.com/jooao.victor_/"
            className="transition-all hover:scale-110 hover:text-zinc-300"
            target="_blank"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://github.com/joaovictor09"
            className="transition-all hover:scale-110 hover:text-zinc-300"
            target="_blank"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaovictor09/"
            className="transition-all hover:scale-110 hover:text-zinc-300"
            target="_blank"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>

      {/* Skills */}

      <div className="mt-5 flex flex-col items-center gap-2 rounded border-b border-zinc-500 bg-zinc-700/80 p-5 pt-5 text-zinc-100 shadow-md">
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

      {/* Contact */}

      <div className="mt-5 flex justify-center rounded border-b border-zinc-500 bg-zinc-700/80 p-5 pt-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}
