export function RepositorySkeleton() {
  return (
    <div className="flex flex-col gap-3 w-full border border-zinc-500 bg-zinc-700/80 p-5 rounded-md transition-all hover:scale-105 hover:bg-[url(../assets/bg-stars.svg)]">
      <div className="w-full flex justify-between items-center text-zinc-100 gap-5">
        <h1 className="text-lg font-bold flex-1 bg-zinc-600 animate-pulse rounded">
          &nbsp;
        </h1>
        {/* <GithubIcon size={24} /> */}
        <div className="text-lg w-7 h-7 bg-zinc-600 animate-pulse rounded"></div>
      </div>
      <p className="text-zinc-400 w-full bg-zinc-600 rounded animate-pulse">
        &nbsp;
      </p>
      <span className="flex items-center gap-2 text-zinc-400 w-full ">
        <div className="w-1 h-1 p-1 bg-zinc-400 rounded-full"></div>
        <div className="bg-zinc-600 w-full rounded animate-pulse">&nbsp;</div>
      </span>
    </div>
  )
}
