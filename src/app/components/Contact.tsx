export function Contact() {
  return (
    <div className="flex flex-col gap-3 justify-center text-center max-w-xl w-full items-center">
      <h2 className="font-bold text-lg">Get In Touch</h2>
      <p className="text-zinc-400">If you want us to work together, have any questions or want me to speak at your event, my inbox is always open. Whether I just want to say hi, I'll try my best to get back to you! Cheers!</p>
      <a 
        href="mailto:joaovictordasilva0911@gmail.com" 
        className='w-max hover:scale-105 px-7 py-5 bg-zinc-600 border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 transition-all'
      >
        Say Hello
      </a>
    </div>
  )
}