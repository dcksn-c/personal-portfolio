'use client'
import React from 'react'
import { Icon } from '@/app/Icon';
import { iconLibrary } from '../app/iconLibrary';
import { motion } from 'framer-motion';
import languageIcon from '../public/assets/icons/language.svg';
import Image from 'next/image';


export const Skills = () => {

  return (
    <section id='skills' className='md:h-screen pt-[calc(88px+2.5rem)] md:pt-0 flex flex-col justify-center' >
      <div>
          <div>
            <div className='text-teal-500 flex flex-col items-center md:mt-[88px]'>
              <span>
                <Image src={languageIcon} width={80} alt=''/>
              </span>
              <h3 className='text-2xl font-extrabold pb-10 text-teal-500'>Languages & Tools</h3>
            </div>
            <p className='text-md md:text-xl text-center leading-8 dark:text-[#f4f4f4] pb-10'>
              List of <span className='text-teal-500'>coding languages</span> and <span className='text-teal-500'>tools</span> that I've come across and learnt during my studies.
              <br/>
              And the pool is still and will, expand.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 justify-center max-w-2xl mx-auto'>
            {iconLibrary.map((icon, i) => (
              <motion.div key={icon.id} initial={{opacity: 0, translateY: -50}} whileInView={{opacity: 1, translateY: 0}} transition={{duration: 0.3, delay: i*0.1}} viewport={{once: true}}>
                <Icon data={icon} />
              </motion.div>
            ))}
            
          </div>
      </div>
    </section>
  )
}
