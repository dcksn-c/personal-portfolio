import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  
  return (
      <main className='bg-[#f4f4f4] px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <About />
        <Skills />
        <Projects />
      </main>

  )
}
