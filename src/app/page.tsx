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
import planet from '../assets/planet1.png'
import astronaut from '../assets/astronaut.png'

import { SkillCard } from './components/SkillCard'
import { Contact } from './components/Contact'

export default async function Home() {
  return (
    <div className="my-10 flex w-full flex-1 flex-col items-center justify-center overflow-x-clip px-5">
      {/* About me card */}
      <div className="relative flex w-full max-w-7xl flex-col items-center rounded border border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md shadow-purple-950">
        {/* First Planet */}

        <div className="absolute right-0 top-0 -z-10 aspect-square w-2/3 max-w-md -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-600 opacity-80 blur-3xl" />
        <Image
          src={planet}
          alt="My profile photo"
          className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-xl -translate-y-1/2 translate-x-1/2 transition-all"
        />

        {/* About me */}
        <div className="relative z-10 flex flex-col items-center gap-5 ">
          <div className="absolute right-1/2 top-1/2 -z-10 h-full w-1/3 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-80 blur-full" />
          {/* My profile photo */}
          <div className="to-purple600- rounded-full bg-gradient-to-b from-purple-500 bg-clip-padding p-1">
            <Image
              src={githubPhoto}
              width={200}
              height={200}
              alt="My profile photo"
              placeholder="blur"
              className="rounded-full border-2 border-white"
            />
          </div>

          {/* My infos */}
          <div className="flex max-w-xl flex-col gap-2 text-center">
            <h1 className="flex items-center justify-center text-xl font-bold">
              Hey, I&apos;m John 👨🏻‍🚀
              <span className="animate-bounce-rocket">🚀</span>
            </h1>
            <p className="text-zinc-300">
              I&apos;m a software developer based in Criciúma, Santa Catarina. I
              specialize in building (and occasionally designing) exceptional
              websites, applications, and everything in between.
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-4 flex max-w-7xl items-center gap-2 text-zinc-300">
          <Link
            href="https://www.instagram.com/jooao.victor_/"
            className="transition-all hover:scale-110 hover:text-zinc-200"
            target="_blank"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://github.com/joaovictor09"
            className="transition-all hover:scale-110 hover:text-zinc-200"
            target="_blank"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaovictor09/"
            className="transition-all hover:scale-110 hover:text-zinc-200"
            target="_blank"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>

      {/* Skills */}
      <div className="relative flex w-full max-w-7xl justify-center">
        {/* Astronaut */}
        <Image
          src={astronaut}
          className="absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/3 scale-75 "
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

      {/* Contact */}

      <div className="mt-5 flex w-full max-w-7xl justify-center rounded border border-purple-600 bg-purple-900 p-5 pt-5 shadow-md shadow-purple-950">
        <Contact />
      </div>
    </div>
  )
}
