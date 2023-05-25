import { CommentFormSkeleton } from './components/CommentFormSkeleton'
import { CommentSkeleton } from './components/CommentSkeleton'

export default function Loading() {
  return (
    <main className="w-full max-w-5xl flex flex-col gap-5 flex-1 items-center px-5 my-10">
      <h1 className="text-xl font-bold">Comments</h1>

      <CommentFormSkeleton />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
        {Array.from({ length: 4 }).map((it, index) => (
          <CommentSkeleton key={index} />
        ))}
      </div>
    </main>
  )
}
