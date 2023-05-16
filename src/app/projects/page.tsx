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
      revalidate: 60 * 60 * 1, // 60 minutes
    },
  })

  const data = await res.json()

  // const repos:RepoProps[] = await data.json()

  const repos = reposSchema.parse(data)

  return (
    <div className="max-w-7xl w-full flex-1 flex-col items-center px-5 my-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
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

      <div className="flex justify-center mt-5 pt-5 border-b border-zinc-500 bg-zinc-700 rounded p-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}
