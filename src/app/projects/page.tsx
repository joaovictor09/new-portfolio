import { z } from 'zod'
import { Contact } from '../components/Contact'
import { Repository } from '../components/Repository'

const reposSchema = z.array(
  z.object({
    id: z.coerce.number().min(1),
    name: z.string().nonempty(),
    html_url: z.string().nonempty(),
    description: z.string().nullable(),
    language: z.string().nullable(),
  }),
)

export default async function Projects() {
  const res = await fetch('https://api.github.com/users/joaovictor09/repos', {
    cache: 'default',
    next: {
      revalidate: 60 * 30, // 30 minutes
    },
  })

  const data = await res.json()

  // const repos:RepoProps[] = await data.json()

  const repos = reposSchema.parse(data)

  return (
    <div className="my-10 w-full max-w-7xl flex-1 flex-col items-center px-5 ">
      <div className="grid w-full grid-cols-1 gap-5 rounded border-b border-zinc-500 bg-zinc-700/50 bg-[url(../assets/bg-stars.svg)] p-5 shadow-md md:grid-cols-2 lg:grid-cols-4">
        {repos.map((repo) => (
          <Repository
            key={repo.id}
            description={repo.description}
            language={repo.language}
            name={repo.name}
            url={repo.html_url}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center rounded border-b border-zinc-500 bg-zinc-700 p-5 pt-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}
