import { User } from 'lucide-react'

interface commentProps {
  user: string
  comment: string
}

export function Comment({ user, comment }: commentProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full border border-zinc-500 bg-zinc-700 p-5 rounded-md transition-all hover:scale-105">
      <div className="flex gap-2 items-center col-span-2">
        <div className="flex w-10 h-10 items-center justify-center rounded-full bg-zinc-500">
          <User className="text-zinc-600" />
        </div>
        <span className="font-bold">{user}</span>
      </div>
      <div className="col-span-2 ml-12 flex flex-1 h-max text-sm text-zinc-400">
        {comment}
      </div>
    </div>
  )
}
