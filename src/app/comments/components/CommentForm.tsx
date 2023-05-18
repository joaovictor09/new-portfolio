'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CircleNotch, Check, WarningCircle } from 'phosphor-react'
import { checkEnvironment } from '@/app/lib/checkEnvironment'
import { useRouter } from 'next/navigation'

const commentFormSchema = z.object({
  user: z.string().nonempty(),
  comment: z.string().nonempty(),
})

type commentFormValue = z.infer<typeof commentFormSchema>

export function CommentForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<commentFormValue>({
    resolver: zodResolver(commentFormSchema),
  })

  async function handleCommentFormSubmit({ user, comment }: commentFormValue) {
    setLoading(true)

    await fetch(checkEnvironment().concat('/api/comments'), {
      method: 'POST',
      body: JSON.stringify({ user, comment }),
    }).then(
      (response) => {
        reset()
        setFormError(false)
        setFormSubmitted(true)
        router.refresh()
      },
      (err) => {
        console.log(err)
        setFormError(true)
      },
    )

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCommentFormSubmit)}
      className="w-full max-w-xl flex flex-col items-center gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md"
    >
      <h2>Leave your comment 😉</h2>
      <input
        type="text"
        placeholder="Your name"
        {...register('user')}
        className={`${
          errors.user ? 'border-red-500' : 'border-zinc-400'
        } h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
      />
      <textarea
        placeholder="Your comment"
        {...register('comment')}
        className={`${
          errors.comment ? 'border-red-500' : 'border-zinc-400'
        } h-fit w-full p-2 bg-transparent rounded border focus:border-transparent focus:outline-1 focus:outline outline-white placeholder:text-zinc-400`}
      />

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

      <button className="disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100 mt-2 w-max hover:scale-105 px-10 py-3 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 hover:text-zinc-100 transition-all">
        Send Comment
      </button>
    </form>
  )
}
