import React from 'react';
import { projectList } from '../app/projectList'
import { Project } from '@/app/Project';

export const Projects = () => {
  return (
    <section id='projects'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat <span className='text-teal-500'>cupidatat non proident</span>, sunt in culpa qui <span className='text-teal-500'>officia deserunt mollit</span> anim id est laborum.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          {projectList.map((project) => (
              <Project data={project} key={project.id}/>
            ))}
        
         
            
          </div>
        </section>
  )
}
