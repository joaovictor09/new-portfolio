'use client'

import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../components/ErrorMessage'
import { useState } from 'react'
import { CircleNotch, Check, WarningCircle } from 'phosphor-react'

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
}).required();

export default function Contact() {

  const formSubmittedSessionStorage = JSON.parse(sessionStorage.getItem('formSubmitted') || 'false')
  const [formSubmitted, setFormSubmitted] = useState(formSubmittedSessionStorage)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  async function sendEmailService({ email, message, name }: IFormInput){
    setLoading(true);
 
    await emailjs.send('service_xb9td8u', 'template_33n7uut', {
      from_name: name,
      message,
      email
    }, 'hpe2AUU2oPIgbO4ky')
    .then(response => {
      setFormError(false);
      setFormSubmitted(true);
      sessionStorage.setItem('formSubmitted', 'true');
    }, err => {
      console.log(err);
      setFormError(true);
    });

    setLoading(false);
  }

  const { register, handleSubmit, formState:{ errors }, reset } = useForm<IFormInput>({
    resolver: zodResolver(schema)
  })

  const onSubmit:SubmitHandler<IFormInput> = async data => {
    await sendEmailService({
      email: data.email,
      message: data.message,
      name: data.name
    })
    reset()
  };
  
  return (
    <div className="w-full max-w-lg flex flex-1 items-center justify-center">
      <div className='w-full flex flex-col gap-10 items-center bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md'>
        <h1 className="text-xl font-bold">Contact Us 👋</h1>

        <form className='w-full flex flex-col gap-2 items-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2 w-full'>
            
            <input 
              {...register('name')}
              type="text" 
              className={`${errors.name ? 'border-red-500': 'border-zinc-400'} h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
              placeholder='Your name'
            />
            {errors.name && <ErrorMessage message="Name is required"/>}

            <input 
              {...register('email')}
              type="email" 
              className={`${errors.email ? 'border-red-500': 'border-zinc-400'} h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
              placeholder='Your email'
            />
            {errors.email && <ErrorMessage message="Email is required"/>}

            <textarea 
              {...register('message')}
              className={`${errors.message ? 'border-red-500': 'border-zinc-400'} h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
              placeholder='Message'
            />
            {errors.message && <ErrorMessage message="Message is required"/>}

          </div>

          <div>

            {
              loading && 
              <span className='flex items-center gap-2 mt-2'>
                <CircleNotch className='animate-spin'/>
                Enviando Form...
              </span>
            }
            
            {
              formSubmitted && 
              <span className='flex items-center gap-2 mt-2'>
                <Check/>
                Formulário Enviado
              </span>
            
            }

            {
              formError && 
              <span className='flex items-center gap-2 mt-2'>
                <WarningCircle/>
                Erro no envio, tente novamente
              </span>
            }

          </div>  

          <button 
            type="submit" 
            disabled={formSubmitted}
            className='disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100 mt-2 w-max hover:scale-105 px-10 py-3 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 hover:text-zinc-100 transition-all'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}