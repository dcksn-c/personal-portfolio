import React from 'react'
import { Icon } from '@/app/Icon';
import { iconLibrary } from '../app/iconLibrary'

export const Skills = () => {
  return (
    <section id='skills' className='md:h-screen flex flex-col justify-center' >
      <div>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Languages & Technologies</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat <span className='text-teal-500'>cupidatat non proident</span>, sunt in culpa qui <span className='text-teal-500'>officia deserunt mollit</span> anim id est laborum.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 justify-center'>
            {iconLibrary.map((icon) => (
              <Icon data={icon} key={icon.id}/>
            ))}
          </div>
      </div>
    </section>
  )
}
