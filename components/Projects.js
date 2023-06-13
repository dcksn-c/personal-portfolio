'use client';
import React from 'react';
import { projectList } from '../app/projectList'
import { Project } from '@/app/Project';
import { motion } from 'framer-motion';
import projectIcon from '../public/assets/icons/project.svg';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export const Projects = () => {
  return (
    <section id='projects' className='pt-[calc(88px+2.5rem)] md:mt-[calc(263px-(88px+2.5rem))] md:pt-[calc(88px+2.5rem)]'>
      <div>
        <div className='text-teal-500 flex flex-col items-center '>
          <span>
            <Image src={projectIcon} width={80}/>
          </span>
          <h3 className='text-2xl font-extrabold'>Projects</h3>
        </div>
        <p className='text-md md:text-xl pt-10 leading-8 dark:text-[#f4f4f4] text-center'>
          Here are some projects that I've done,
          <br/>
          and more on my <span className='text-teal-500'>GitHub</span>! 
        </p>
      </div>
        <div className='flex flex-col gap-10 pt-14 pb-10 lg:flex-row lg:flex-wrap '>
        {projectList.map((project, i) => (
            <motion.div className='ease-in-out duration-300 transition hover:!scale-105 text-center flex flex-col shadow-lg rounded-lg bg-white basis-1/3 flex-1'
              key={project.id}
              initial={{opacity: 0, translateX: i % 2 === 0 ? -50 : 50}}
              whileInView={{opacity: 1, translateX: 0}}
              transition={{duration: 0.3, delay: i*0.1}}
              viewport={{once: true}}>
              <Project data={project}  />
            </motion.div>
        ))}
      </div>
      <div className='w-full pb-20'>
        <Link href='https://github.com/dcksn-c?tab=repositories' target='_blank'>
          <button className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-md text-[#f4f4f4] px-8 py-3 rounded-md flex items-center mx-auto text-md md:text-xl'>
              See more at GitHub
              <AiFillGithub className='ml-1 text-xl md:text-3xl'/>
          </button>
        </Link> 
      </div>
    </section>
  )
}
