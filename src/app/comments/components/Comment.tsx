import { User } from 'lucide-react'

interface commentProps {
  user: string
  comment: string
}

export function Comment({ user, comment }: commentProps) {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-2 gap-3 rounded-md border border-zinc-500 bg-transparent p-5 transition-all hover:scale-105 ">
      <div className="col-span-2 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-500">
          <User className="text-zinc-600" />
        </div>
        <span className="font-bold">{user}</span>
      </div>
      <div className="col-span-2 ml-12 flex h-max flex-1 text-sm text-zinc-400">
        {comment}
      </div>
    </div>
  )
}
