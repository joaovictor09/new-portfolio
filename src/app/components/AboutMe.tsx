import { Instagram, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import githubPhoto from '../../assets/github-profile-image.jpeg'
import planet from '../../assets/planet.webp'
import { SocialLink } from './SocialLink'

export function AboutMe() {
  return (
    <div className="relative flex w-full max-w-7xl flex-col items-center rounded border border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md shadow-purple-950">
      {/* First Planet */}

      <div className="absolute right-0 top-0 -z-10 aspect-square w-2/3 max-w-md -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-600 opacity-80 blur-3xl" />
      <Image
        src={planet}
        alt="My profile photo"
        className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-xl -translate-y-1/2 translate-x-1/2 transition-all"
        priority
        placeholder="blur"
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
            // placeholder="blur"
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
        <SocialLink href="https://www.instagram.com/jooao.victor_/">
          <Instagram size={24} />
        </SocialLink>
        <SocialLink href="https://github.com/joaovictor09">
          <Github size={24} />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/joaovictor09/">
          <Linkedin size={24} />
        </SocialLink>
      </div>
    </div>
  )
}
