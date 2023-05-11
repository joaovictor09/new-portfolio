import { Repository } from "../components/Repository";
import { Header } from "../components/Header";

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
    <div className="max-w-7xl w-full grid grid-cols-4 gap-5 p-10">
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
  )
}
