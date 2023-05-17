'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
// import { getComments } from '@/lib/getComments'

const commentFormSchema = z.object({
  user: z.string().nonempty(),
  comment: z.string().nonempty(),
})

type commentFormValue = z.infer<typeof commentFormSchema>

export function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<commentFormValue>({
    resolver: zodResolver(commentFormSchema),
  })

  async function handleCommentFormSubmit({ user, comment }: commentFormValue) {
    await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      body: JSON.stringify({ user, comment }),
    }).then((res) => {
      reset()
      // getComments()
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleCommentFormSubmit)}
      className="w-full flex flex-col items-center gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md"
    >
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

      <button className="disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-100 mt-2 w-max hover:scale-105 px-10 py-3 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg hover:shadow-md hover:bg-zinc-700 hover:text-zinc-100 transition-all">
        Send Comment
      </button>
    </form>
  )
}
