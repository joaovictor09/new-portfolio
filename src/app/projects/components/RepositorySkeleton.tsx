export function RepositorySkeleton() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md border border-purple-950 bg-purple-800 p-5 transition-all hover:scale-105 hover:bg-transparent hover:bg-[url(../assets/bg-stars.svg)]">
      <div className="flex w-full items-center justify-between gap-5 text-zinc-100">
        <h1 className="flex-1 animate-pulse rounded bg-purple-500 text-lg font-bold">
          &nbsp;
        </h1>
        {/* <GithubIcon size={24} /> */}
        <div className="h-7 w-7 animate-pulse rounded bg-purple-500 text-lg"></div>
      </div>
      <p className="w-full animate-pulse rounded bg-purple-500 text-zinc-400">
        &nbsp;
      </p>
      <span className="flex w-full items-center gap-2 text-zinc-400 ">
        <div className="h-1 w-1 animate-pulse rounded-full bg-purple-500 p-1"></div>
        <div className="w-full animate-pulse rounded bg-purple-500">&nbsp;</div>
      </span>
    </div>
  )
}
