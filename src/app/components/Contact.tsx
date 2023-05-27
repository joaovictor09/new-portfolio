import Link from 'next/link'

export function Contact() {
  return (
    <div className="perspective flex w-full max-w-xl flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-lg font-bold">Get In Touch</h2>
      <p className=" text-zinc-300">
        If you want us to work together, have any questions, my inbox is always
        open. Whether I just want to say hi, I&apos;ll try my best to get back
        to you! Cheers!
      </p>
      <Link
        href="/contact"
        className="mt-2 w-max rounded-lg border border-zinc-500 bg-zinc-200 px-10 py-5 font-bold text-black transition-all hover:scale-105 hover:bg-transparent hover:bg-[url(../assets/bg-stars.svg)] hover:text-zinc-100 hover:shadow-md"
      >
        Say Hello
      </Link>
    </div>
  )
}
