import { CommentFormSkeleton } from './components/CommentFormSkeleton'
import { CommentSkeleton } from './components/CommentSkeleton'

export default function Loading() {
  return (
    <main className="my-10 flex w-full max-w-5xl flex-1 flex-col items-center gap-5 px-5">
      <h1 className="text-xl font-bold">Comments</h1>

      <CommentFormSkeleton />

      <div className="grid w-full grid-cols-1 gap-5 rounded border-b border-zinc-500 bg-zinc-700 p-5 shadow-md md:grid-cols-2">
        {Array.from({ length: 4 }).map((it, index) => (
          <CommentSkeleton key={index} />
        ))}
      </div>
    </main>
  )
}
