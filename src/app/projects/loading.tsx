import { Contact } from '../components/Contact'
import { RepositorySkeleton } from './components/RepositorySkeleton'

export default function LoadingProjects() {
  return (
    <div className="max-w-7xl w-full flex-1 flex-col items-center px-5 my-10 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-zinc-700/50 rounded p-5 border-b border-zinc-500 shadow-md bg-[url(../assets/bg-stars.svg)]">
        {Array.from({ length: 8 }).map((it, index) => (
          <RepositorySkeleton key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-5 pt-5 border-b border-zinc-500 bg-zinc-700 rounded p-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}
