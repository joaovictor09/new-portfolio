import { ContactForm } from '../components/form/ContactForm'

export default function Contact() {
  return (
    <div className="w-full max-w-lg flex flex-1 items-center justify-center px-5">
      <div className="w-full flex flex-col gap-10 items-center bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
        <h1 className="text-xl font-bold">Contact Us 👋</h1>
        <ContactForm />
      </div>
    </div>
  )
}
