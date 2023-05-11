import Link from "next/link";

export function Contact() {
  return (
    <div className="flex flex-col gap-3 justify-center text-center max-w-xl w-full items-center">
      <h2 className="font-bold text-lg">Get In Touch</h2>
      <p 
        className="text-zinc-400"
      >
        If you want us to work together, have any questions, my inbox is always open. Whether I just want to say hi, I&apos;ll try my best to get back to you! Cheers!
      </p>
      <Link 
        href="/contact" 
        className='mt-2 w-max hover:scale-105 px-10 py-5 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 hover:text-zinc-100 transition-all'
      >
        Say Hello
      </Link>
    </div>
  )
}