import Image from 'next/image'

import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'
import planet from '../../assets/planet4.png'
import astronaut from '../../assets/astronaut4.png'
import { getComments } from '../../lib/getComments'

export default async function Comments() {
  const comments = await getComments()
  // console.log(comments)

  return (
    <main className="my-10 flex w-full flex-1 flex-col items-center gap-5 overflow-x-clip px-5">
      <div className="relative flex w-full max-w-5xl flex-1 flex-col items-center gap-5 px-5">
        <Image
          src={astronaut}
          className="absolute right-0 top-10 -z-10 -translate-y-1/3 translate-x-1/2 scale-75 -scale-x-75 transform"
          alt="Astronaut"
        />
        <h1 className="text-xl font-bold">Comments</h1>

        <CommentForm />

        <div className="relative grid w-full grid-cols-1 gap-5 rounded border border-purple-600 bg-gradient-to-l from-purple-900 to-purple-900/80 p-5 shadow-md shadow-purple-950 md:grid-cols-2">
          {/* Planet */}
          <div className="absolute left-0 top-0 -z-10 aspect-square w-2/3 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/70 opacity-80 blur-3xl" />
          <Image
            src={planet}
            alt="My profile photo"
            className="absolute left-0 top-0 -z-10 aspect-square w-full max-w-md -translate-x-1/2 -translate-y-1/2 transition-all"
          />

          {/* Comment Cards */}

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
      </div>
    </main>
  )
}
