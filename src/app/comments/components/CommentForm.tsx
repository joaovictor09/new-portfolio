'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CircleNotch, Check, WarningCircle } from 'phosphor-react'
import { checkEnvironment } from '@/lib/checkEnvironment'
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
      className="flex w-full max-w-xl flex-col items-center gap-5 rounded border border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md shadow-purple-950"
    >
      <h2>Leave your comment 😉</h2>
      <input
        type="text"
        placeholder="Your name"
        {...register('user')}
        className={`${
          errors.user ? 'border-red-500' : 'border-zinc-400'
        } h-fit w-full rounded border bg-transparent p-2 outline-white placeholder:text-zinc-400 focus:border-transparent focus:outline focus:outline-1`}
      />
      <textarea
        placeholder="Your comment"
        {...register('comment')}
        className={`${
          errors.comment ? 'border-red-500' : 'border-zinc-400'
        } h-fit w-full rounded border bg-transparent p-2 outline-white placeholder:text-zinc-400 focus:border-transparent focus:outline focus:outline-1`}
      />

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

      <button className="mt-2 w-max rounded-lg border border-zinc-500 bg-zinc-200 px-10 py-3 font-bold text-black transition-all hover:scale-105 hover:bg-zinc-700 hover:text-zinc-100 hover:shadow-md disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100">
        Send Comment
      </button>
    </form>
  )
}
