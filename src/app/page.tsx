import { Contact } from './components/Contact'
import { AboutMe } from './components/AboutMe'
import { SkillsGrid } from './components/SkillsGrid'

export default async function Home() {
  return (
    <div className="my-10 flex w-full flex-1 flex-col items-center justify-center overflow-x-clip px-5">
      <AboutMe />
      <SkillsGrid />

      {/* Contact */}
      <div className="mt-5 flex w-full max-w-7xl justify-center rounded border border-purple-600 bg-purple-900 p-5 pt-5 shadow-md shadow-purple-950">
        <Contact />
      </div>
    </div>
  )
}
