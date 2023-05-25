import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'
import { getComments } from '../../lib/getComments'

export default async function Comments() {
  const comments = await getComments()

  return (
    <main className="my-10 flex w-full max-w-5xl flex-1 flex-col items-center gap-5 px-5">
      <h1 className="text-xl font-bold">Comments</h1>

      <CommentForm />

      <div className="grid w-full grid-cols-1 gap-5 rounded border-b border-zinc-500 bg-zinc-700/90 p-5 shadow-md md:grid-cols-2">
        {comments.length >= 1 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment.comment}
              user={comment.user}
            />
          ))
        ) : (
          <div className="flex w-full items-center justify-center rounded-md border border-zinc-500 bg-zinc-700 p-5 transition-all hover:scale-105">
            <span>Sem comentários</span>
          </div>
        )}
      </div>
    </main>
  )
}
