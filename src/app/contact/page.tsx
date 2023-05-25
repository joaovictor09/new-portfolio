import { ContactForm } from '../components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className="my-10 flex w-full max-w-lg flex-1 items-center justify-center px-5">
      <div className="flex w-full flex-col items-center gap-10 rounded border-b border-zinc-500 bg-zinc-700/90 p-5 shadow-md">
        <h1 className="text-xl font-bold">Contact Us 👋</h1>
        <ContactForm />
      </div>
    </div>
  )
}
