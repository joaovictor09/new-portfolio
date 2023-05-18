import { User } from 'lucide-react'

export function CommentSkeleton() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full border border-zinc-500 bg-zinc-600 p-5 rounded-md transition-all hover:scale-105 animate-pulse">
      <div className="flex gap-2 items-center col-span-2">
        <div className="flex w-10 h-10 items-center justify-center rounded-full bg-zinc-500">
          <User className="text-zinc-600" />
        </div>
        <span className="font-bold"></span>
      </div>
      <div className="col-span-2 ml-12 flex flex-1 h-max text-sm text-zinc-400"></div>
    </div>
  )
}
