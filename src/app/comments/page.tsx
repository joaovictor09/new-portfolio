import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'
import { getComments } from '../../lib/getComments'

export default async function Comments() {
  const comments = await getComments()

  return (
    <main className="w-full max-w-5xl flex flex-col gap-5 flex-1 items-center px-5 my-10">
      <h1 className="text-xl font-bold">Comments</h1>

      <CommentForm />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 bg-zinc-700/90 rounded p-5 border-b border-zinc-500 shadow-md">
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
