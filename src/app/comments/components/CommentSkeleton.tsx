import { User } from 'lucide-react'

export function CommentSkeleton() {
  return (
    <div className="grid w-full animate-pulse grid-cols-2 grid-rows-2 gap-3 rounded-md border border-zinc-500 bg-zinc-600 p-5 transition-all hover:scale-105">
      <div className="col-span-2 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-500">
          <User className="text-zinc-600" />
        </div>
        <span className="font-bold"></span>
      </div>
      <div className="col-span-2 ml-12 flex h-max flex-1 text-sm text-zinc-400"></div>
    </div>
  )
}
