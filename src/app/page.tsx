'use client'

import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export default async function Home() {

  return (
    <div className="max-w-7xl w-full flex-1 flex-col items-center">
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
        <div className="text-zinc-400 flex items-center gap-2">
          <Link href="https://www.instagram.com/jooao.victor_/" className="hover:text-zinc-500 transition-all" target="_blank">
            <InstagramLogo size={24}/>
          </Link>
          <Link href="https://github.com/joaovictor09" className="hover:text-zinc-500 transition-all" target="_blank">
            <GithubLogo size={24}/>
          </Link>
          <Link href="https://www.linkedin.com/in/joaovictor09/" className="hover:text-zinc-500 transition-all" target="_blank">
            <LinkedinLogo size={24}/>
          </Link>
        </div>
      </div>
    </div>
  )
}
