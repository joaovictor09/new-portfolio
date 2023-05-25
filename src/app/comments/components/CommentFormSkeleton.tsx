export function CommentFormSkeleton() {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-5 rounded border-b border-zinc-500 bg-zinc-700 p-5 shadow-md">
      <h2>Leave your comment 😉</h2>
      <input
        disabled
        className={`h-fit w-full animate-pulse rounded border bg-zinc-600 p-2`}
      />
      <textarea
        disabled
        className={`h-fit w-full animate-pulse rounded border bg-zinc-600 p-2`}
      />

      <div></div>

      <button
        disabled
        className="mt-2 w-max animate-pulse rounded-lg border border-zinc-500 bg-zinc-200 px-10 py-3 font-bold text-black hover:scale-105"
      >
        Send Comment
      </button>
    </div>
  )
}
