import { Contact } from "../components/Contact";
import { Repository } from "../components/Repository";

interface RepoProps{
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;  
}

import data from '../repos.json'

export default async function Projects() {
  // const data = await fetch('https://api.github.com/users/joaovictor09/repos', {
  //   cache: "no-cache"
  // })

  // const repos:RepoProps[] = await data.json()

  const repos = data

  return (
    <div className="max-w-7xl w-full flex-1 flex-col items-center">

      <div className="w-full grid grid-cols-4 gap-5 bg-zinc-700 rounded p-5 border-b border-zinc-500 shadow-md">
        {
          repos.map(repo => (
            <Repository 
              key={repo.id} 
              description={repo.description} 
              language={repo.language} 
              name={repo.name} 
              url={repo.html_url} 
            />
          ))
        }
      </div>

      <div className="flex justify-center mt-5 pt-5 border-b border-zinc-500 bg-zinc-700 rounded p-5 shadow-md">
        <Contact />
      </div>
    </div>
  )
}