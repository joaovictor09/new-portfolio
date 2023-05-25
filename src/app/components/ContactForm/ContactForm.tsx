'use client'

import { CircleNotch, Check, WarningCircle } from 'phosphor-react'
import { ErrorMessage } from './components/ErrorMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import emailjs from '@emailjs/browser'

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
    await emailjs
      .send(
        'service_xb9td8u',
        'template_33n7uut',
        {
          from_name: name,
          message,
          email,
        },
        'hpe2AUU2oPIgbO4ky',
      )
      .then(
        (response) => {
          setFormError(false)
          setFormSubmitted(true)
          setLoading(false)
          // cookies.set('formSubmitted', true, { path: '/' });
        },
        (err) => {
          console.log(err)
          setFormError(true)
          setLoading(false)
        },
      )
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
      className="flex w-full flex-col items-center gap-2"
      onSubmit={handleSubmit(sendMessageFormHandle)}
    >
      <div className="flex w-full flex-col gap-2">
        <input
          {...register('name')}
          type="text"
          className={`${
            errors.name ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full rounded border bg-transparent p-2 outline-white placeholder:text-zinc-400 focus:border-transparent focus:outline focus:outline-1`}
          placeholder="Your name"
        />
        {errors.name && <ErrorMessage message={errors.name.message} />}

        <input
          {...register('email')}
          type="email"
          className={`${
            errors.email ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full rounded border bg-transparent p-2 outline-white placeholder:text-zinc-400 focus:border-transparent focus:outline focus:outline-1`}
          placeholder="Your email"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <textarea
          {...register('message')}
          className={`${
            errors.message ? 'border-red-500' : 'border-zinc-400'
          } h-fit w-full rounded border bg-transparent p-2 outline-white placeholder:text-zinc-400 focus:border-transparent focus:outline focus:outline-1`}
          placeholder="Message"
        />
        {errors.message && <ErrorMessage message={errors.message.message} />}
      </div>

      <div>
        {loading && (
          <span className="mt-2 flex items-center gap-2">
            <CircleNotch className="animate-spin" />
            Enviando Form...
          </span>
        )}

        {formSubmitted && (
          <span className="mt-2 flex items-center gap-2">
            <Check />
            Formulário Enviado
          </span>
        )}

        {formError && (
          <span className="mt-2 flex items-center gap-2">
            <WarningCircle />
            Erro no envio, tente novamente
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={formSubmitted}
        className="mt-2 w-max rounded-lg border border-zinc-500 bg-zinc-200 px-10 py-3 font-bold text-black transition-all hover:scale-105 hover:bg-transparent hover:bg-[url(../assets/bg-stars.svg)] hover:text-zinc-100 hover:shadow-md disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100"
      >
        Submit
      </button>
    </form>
  )
}
