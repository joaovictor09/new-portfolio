export default function LoadingContact() {
  return (
    <div className="my-10 flex w-full max-w-lg flex-1 items-center justify-center px-5">
      <div className="flex w-full flex-col items-center gap-10 rounded border-b border-zinc-500 bg-zinc-700/90 p-5 shadow-md">
        <h1 className="animate-pulse rounded bg-zinc-600 text-xl font-bold text-transparent">
          Contact Us 👋
        </h1>

        {/* Form */}
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="flex h-[2.625rem] w-full animate-pulse flex-col gap-2 rounded bg-zinc-600 p-2" />
            <div className="flex h-[2.625rem] w-full animate-pulse flex-col gap-2 rounded bg-zinc-600 p-2" />
            <div className="flex h-[4.125rem] w-full animate-pulse flex-col gap-2 rounded bg-zinc-600 p-2" />
          </div>

          {/* Button Form */}
          <div className="mt-2 h-[3.125rem] w-max animate-pulse rounded-lg bg-zinc-600 px-10 py-3 text-transparent">
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}
