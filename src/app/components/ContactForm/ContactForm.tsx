'use client'

import { CircleNotch, Check, WarningCircle } from 'phosphor-react'
import { ErrorMessage } from './components/ErrorMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { checkEnvironment } from '@/lib/checkEnvironment'

const sendMessageFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  message: z.string().nonempty(),
})

type SendMessageFormData = z.infer<typeof sendMessageFormSchema>

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  async function sendEmailService({
    email,
    message,
    name,
  }: SendMessageFormData) {
    setLoading(true)
    const bodyData = JSON.stringify({
      name,
      message,
      email,
    })
    await fetch(checkEnvironment().concat('/api/contact'), {
      cache: 'no-store',
      method: 'POST',
      body: bodyData,
    }).then(
      (response) => {
        setFormError(false)
        setFormSubmitted(true)
      },
      (err) => {
        console.log(err)
        setFormError(true)
      },
    )
    setLoading(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageFormSchema),
  })

  async function sendMessageFormHandle({
    email,
    message,
    name,
  }: SendMessageFormData) {
    await sendEmailService({
      email,
      message,
      name,
    })
    reset()
  }

  return (
    <form
      className="w-full flex flex-col gap-2 items-center"
      onSubmit={handleSubmit(sendMessageFormHandle)}
    >
      <div className="flex flex-col gap-2 w-full">
        <input
          {...register('name')}
          type="text"
          className={`${
            errors.name ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
          placeholder="Your name"
        />
        {errors.name && <ErrorMessage message={errors.name.message} />}

        <input
          {...register('email')}
          type="email"
          className={`${
            errors.email ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
          placeholder="Your email"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <textarea
          {...register('message')}
          className={`${
            errors.message ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
          placeholder="Message"
        />
        {errors.message && <ErrorMessage message={errors.message.message} />}
      </div>

      <div>
        {loading && (
          <span className="flex items-center gap-2 mt-2">
            <CircleNotch className="animate-spin" />
            Enviando Form...
          </span>
        )}

        {formSubmitted && (
          <span className="flex items-center gap-2 mt-2">
            <Check />
            Formulário Enviado
          </span>
        )}

        {formError && (
          <span className="flex items-center gap-2 mt-2">
            <WarningCircle />
            Erro no envio, tente novamente
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={formSubmitted}
        className="disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100 mt-2 w-max hover:scale-105 px-10 py-3 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg hover:shadow-md hover:bg-[url(../assets/bg-stars.svg)] hover:bg-transparent hover:text-zinc-100 transition-all"
      >
        Submit
      </button>
    </form>
  )
}
