import { z } from 'zod'
import Image from 'next/image'

import { Contact } from '../components/Contact'
import { Repository } from '../components/Repository'
import planet from '../../assets/planet2.webp'
import astronaut from '../../assets/astronaut3.webp'

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
    <div className="relative my-5 flex w-full flex-1 flex-col items-center justify-center overflow-x-clip">
      <div className="relative my-10 w-full max-w-7xl flex-1 flex-col items-center px-5 ">
        {/* Planet */}
        <div className="absolute left-0 top-0 -z-10 aspect-square w-2/3 max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 opacity-80 blur-3xl" />
        <Image
          src={planet}
          alt="My profile photo"
          width={500}
          className="absolute left-0 top-0 -z-10 aspect-square w-full max-w-sm -translate-x-1/2 -translate-y-1/2 transition-all"
        />

        <div className="grid w-full grid-cols-1 gap-5 rounded border border-purple-600 bg-gradient-to-l from-purple-900 to-purple-900/80 p-5 shadow-md md:grid-cols-2 lg:grid-cols-4">
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

        {/* Contact */}

        <div className="relative mt-5 flex w-full max-w-7xl justify-center rounded border border-purple-950 bg-gradient-to-r from-purple-900 to-purple-900/80 p-5 pt-5 shadow-md shadow-purple-950">
          {/* Astronaut */}
          <Image
            src={astronaut}
            className="absolute right-0 top-0 -z-10 -translate-y-1/3 translate-x-1/2 scale-75 -scale-x-75 transform"
            alt="Astronaut"
            width={500}
          />

          {/* Contact Card */}
          <Contact />
        </div>
      </div>
    </div>
  )
}
