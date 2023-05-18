export function CommentFormSkeleton() {
  return (
    <div className="w-full flex flex-col items-center gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
      <input
        disabled
        className={`h-fit w-full p-2 bg-zinc-600 rounded border animate-pulse`}
      />
      <textarea
        disabled
        className={`h-fit w-full p-2 bg-zinc-600 rounded border animate-pulse`}
      />

      <div></div>

      <button
        disabled
        className="mt-2 w-max hover:scale-105 px-10 py-3 bg-zinc-200 text-black font-bold border border-zinc-500 rounded-lg animate-pulse"
      >
        Send Comment
      </button>
    </div>
  )
}
