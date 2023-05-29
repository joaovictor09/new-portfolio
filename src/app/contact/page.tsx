import { ContactForm } from '../components/ContactForm/ContactForm'
import planet from '../../assets/planet3.webp'
import astronaut from '../../assets/astronaut2.webp'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="relative my-10 flex w-full flex-1 items-center justify-center overflow-x-clip px-5">
      <div className="relative flex w-full max-w-lg flex-col items-center gap-10 rounded border border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md">
        <div className="absolute right-0 top-0 -z-10 aspect-square w-2/3 max-w-sm -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-300/50 opacity-80 blur-3xl" />
        <Image
          src={planet}
          alt="My profile photo"
          className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-xl -translate-y-1/2 translate-x-1/2 transition-all"
        />
        <Image
          src={astronaut}
          className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/3 scale-75 -scale-x-75 "
          alt="Astronaut"
        />
        <h1 className="text-xl font-bold">Contact Us 👋</h1>
        <ContactForm />
      </div>
    </div>
  )
}
