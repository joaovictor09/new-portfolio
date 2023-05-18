import { CommentFormSkeleton } from './components/CommentFormSkeleton'
import { CommentSkeleton } from './components/CommentSkeleton'

export default function Loading() {
  return (
    <main className="w-full max-w-lg flex flex-col gap-5 flex-1 items-center px-5 my-10">
      <h1>Comments</h1>

      <CommentFormSkeleton />

      <div className="w-full flex flex-col gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
        {Array.from({ length: 1 }).map((it, index) => (
          <CommentSkeleton key={index} />
        ))}
      </div>
    </main>
  )
}
