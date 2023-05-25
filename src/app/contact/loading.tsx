export default function LoadingContact() {
  return (
    <div className="w-full max-w-lg flex flex-1 items-center justify-center px-5 my-10">
      <div className="w-full flex flex-col gap-10 items-center bg-zinc-700/90 rounded p-5 border-b border-zinc-500 shadow-md">
        <h1 className="text-transparent text-xl font-bold rounded bg-zinc-600 animate-pulse">
          Contact Us 👋
        </h1>

        {/* Form */}
        <div className="w-full flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 w-full bg-zinc-600 animate-pulse p-2 rounded h-[2.625rem]" />
            <div className="flex flex-col gap-2 w-full bg-zinc-600 animate-pulse p-2 rounded h-[2.625rem]" />
            <div className="flex flex-col gap-2 w-full bg-zinc-600 animate-pulse p-2 rounded h-[4.125rem]" />
          </div>

          {/* Button Form */}
          <div className="text-transparent mt-2 w-max px-10 py-3 rounded-lg bg-zinc-600 animate-pulse h-[3.125rem]">
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}
