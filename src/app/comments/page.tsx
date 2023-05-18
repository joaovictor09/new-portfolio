import { z } from 'zod'
import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'

const commentsSchema = z
  .object({
    id: z.string().nonempty(),
    user: z.string().nonempty(),
    comment: z.string().nonempty(),
  })
  .array()

type commentsProps = z.infer<typeof commentsSchema>

async function getComments() {
  const res = await fetch('http://localhost:3000/api/comments', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // const data = commentsSchema.parse(await res.json())

  return res.json()
}

export default async function Comments() {
  const comments: commentsProps = await getComments()

  // const comments = [
  //   {
  //     id: '1',
  //     user: 'test',
  //     comment: 'test',
  //   },
  //   {
  //     id: '2',
  //     user: 'test',
  //     comment: 'test',
  //   },
  //   {
  //     id: '3',
  //     user: 'test',
  //     comment: 'test',
  //   },
  // ]

  return (
    <main className="w-full max-w-lg flex flex-col gap-5 flex-1 items-center px-5 my-10">
      <h1>Comments</h1>

      <CommentForm />

      <div className="w-full flex flex-col gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
        {comments.length >= 1 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment.comment}
              user={comment.user}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full border border-zinc-500 bg-zinc-700 p-5 rounded-md transition-all hover:scale-105">
            <span>Sem comentários</span>
          </div>
        )}
      </div>
    </main>
  )
}
