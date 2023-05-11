'use client'

import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import { SkillCard } from "./components/SkillCard";
import CssIcon from './assets/CSS3.svg';
import HTMLIcon from './assets/HTML5.svg';
import JavaScriptIcon from './assets/JavaScript.svg';
import NextIcon from './assets/Next.svg';
import NodeJsIcon from './assets/nodejs.svg';
import ReactIcon from './assets/React.svg';
import { Contact } from "./components/Contact";

export default async function Home() {

  return (
    <div className="max-w-7xl w-full flex-1 flex-col items-center">

      {/* About me */}

      <div className="flex flex-col items-center gap-5">
        <Image 
          src="https://github.com/joaovictor09.png?size=200" 
          width={200} 
          height={200} 
          alt="My profile photo made by a IA"
          className="rounded-full"
        />
        <div className="max-w-xl text-center flex flex-col gap-2">
          <h1 className="text-xl font-bold">Hey, I&apos;m John 👋</h1>
          <p className="text-zinc-400">
            I&apos;m a software developer based in Criciúma, Santa Catarina. I specialize in building (and occasionally designing)
            exceptional websites, applications, and everything in between.
          </p>
        </div>

        {/* Socials */}
        
        <div className="text-zinc-400 flex items-center gap-2">
          <Link href="https://www.instagram.com/jooao.victor_/" className="transition-all hover:scale-110 hover:text-zinc-300" target="_blank">
            <InstagramLogo size={24}/>
          </Link>
          <Link href="https://github.com/joaovictor09" className="transition-all hover:scale-110 hover:text-zinc-300" target="_blank">
            <GithubLogo size={24}/>
          </Link>
          <Link href="https://www.linkedin.com/in/joaovictor09/" className="transition-all hover:scale-110 hover:text-zinc-300" target="_blank">
            <LinkedinLogo size={24}/>
          </Link>
        </div>
      </div>

      {/* Skills */}

      <div className="flex flex-col items-center mt-5 pt-5 text-zinc-100 gap-2 border-t border-zinc-500">
        <h2 className="font-bold text-lg">Skills</h2>
        <div className="grid grid-cols-5 gap-5">
          <SkillCard name="HTML" SkillIcon={HTMLIcon}/>
          <SkillCard name="CSS" SkillIcon={CssIcon}/>
          <SkillCard name="JavaScript" SkillIcon={JavaScriptIcon}/>
          <SkillCard name="ReactJs" SkillIcon={ReactIcon}/>
          <SkillCard name="Nextjs" SkillIcon={NextIcon}/>
          <SkillCard name="Node" SkillIcon={NodeJsIcon}/>
        </div>
      </div>

      {/* Contact */}

      <div className="flex justify-center mt-5 pt-5 border-t border-zinc-500">
        <Contact />
      </div>

    </div>
  )
}
