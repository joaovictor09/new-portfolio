import Image from 'next/image'

import astronaut from '../../assets/astronaut2.webp'
import planet from '../../assets/planet3.webp'

export default function LoadingContact() {
  return (
    <div className="relative my-10 flex w-full flex-1 items-center justify-center overflow-x-clip px-5">
      <div className="relative flex w-full max-w-lg flex-col items-center gap-10 rounded border border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md">
        <div className="absolute right-0 top-0 -z-10 aspect-square w-2/3 max-w-sm -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-300/50 opacity-80 blur-3xl" />
        <Image
          src={planet}
          alt="My profile photo"
          width={500}
          className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-xl -translate-y-1/2 translate-x-1/2 transition-all"
        />
        <Image
          src={astronaut}
          className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/3 scale-75 -scale-x-75 "
          alt="Astronaut"
          width={500}
        />

        <h1 className="animate-pulse rounded bg-purple-500 text-xl font-bold text-transparent">
          Contact Us 👋
        </h1>

        {/* Form */}
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="flex h-[2.625rem] w-full animate-pulse flex-col gap-2 rounded bg-purple-500 p-2" />
            <div className="flex h-[2.625rem] w-full animate-pulse flex-col gap-2 rounded bg-purple-500 p-2" />
            <div className="flex h-[4.125rem] w-full animate-pulse flex-col gap-2 rounded bg-purple-500 p-2" />
          </div>

          {/* Button Form */}
          <div className="mt-2 h-[3.125rem] w-max animate-pulse rounded-lg bg-purple-500 px-10 py-3 text-transparent"></div>
        </div>
      </div>
    </div>
  )
}
