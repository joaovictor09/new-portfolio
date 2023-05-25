export function RepositorySkeleton() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md border border-zinc-500 bg-zinc-700/80 p-5 transition-all hover:scale-105 hover:bg-[url(../assets/bg-stars.svg)]">
      <div className="flex w-full items-center justify-between gap-5 text-zinc-100">
        <h1 className="flex-1 animate-pulse rounded bg-zinc-600 text-lg font-bold">
          &nbsp;
        </h1>
        {/* <GithubIcon size={24} /> */}
        <div className="h-7 w-7 animate-pulse rounded bg-zinc-600 text-lg"></div>
      </div>
      <p className="w-full animate-pulse rounded bg-zinc-600 text-zinc-400">
        &nbsp;
      </p>
      <span className="flex w-full items-center gap-2 text-zinc-400 ">
        <div className="h-1 w-1 rounded-full bg-zinc-400 p-1"></div>
        <div className="w-full animate-pulse rounded bg-zinc-600">&nbsp;</div>
      </span>
    </div>
  )
}
