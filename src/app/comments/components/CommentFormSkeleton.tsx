export function CommentFormSkeleton() {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-5 rounded border-purple-600 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 shadow-md shadow-purple-950">
      <h2 className="animate-pulse rounded bg-purple-500 text-transparent">
        Leave your comment 😉
      </h2>
      <input
        disabled
        className={`h-fit w-full animate-pulse rounded bg-purple-500 p-2`}
      />
      <textarea
        disabled
        className={`h-fit w-full animate-pulse resize-none rounded bg-purple-500 p-2`}
      />

      <div></div>

      <button
        disabled
        className="mt-2 w-max animate-pulse rounded-lg bg-purple-500 px-10 py-3 font-bold text-black text-transparent hover:scale-105"
      >
        Send Comment
      </button>
    </div>
  )
}
