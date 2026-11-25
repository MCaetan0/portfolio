import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { HowIWork } from '../components/sections/HowIWork'
import { Projects } from '../components/sections/Projects'

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <HowIWork />
      <Experience />
      <Contact />
    </>
  )
}
