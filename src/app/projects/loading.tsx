import { Contact } from '../components/Contact'
import { RepositorySkeleton } from './components/RepositorySkeleton'

export default function LoadingProjects() {
  return (
    <div className="my-10 w-full max-w-7xl flex-1 flex-col items-center px-5 ">
      <div className="grid w-full grid-cols-1 gap-5 rounded border-b border-zinc-500 bg-zinc-700/50 bg-[url(../assets/bg-stars.svg)] p-5 shadow-md md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((it, index) => (
          <RepositorySkeleton key={index} />
        ))}
      </div>

      <div className="mt-5 flex justify-center rounded border-b border-zinc-500 bg-zinc-700 p-5 pt-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}
