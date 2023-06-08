import React from 'react';
import Image from 'next/image';
import code from '../public/assets/icons/code.svg';
import externalLink from '../public/assets/icons/external-link.svg';

export const Project = (props) => {
    const { name, src, tech, description, demo, github } = props.data;
  return (
        <div className='text-center flex flex-col shadow-lg rounded-lg dark:bg-white basis-1/3 flex-1 ease-in-out duration-300 transition hover:scale-105'>
            <Image src={src} className='rounded-t-lg object-contain' responsive alt={name}/>
            <div className='my-auto p-4'>
                <div>
                    <h1 className='text-lg font-bold dark:text-black'>{name}</h1>
                    <p className='text-gray-600 p-4'>{description}</p>
                    <h6 className='font-bold text-gray-600 text-xs pb-4 [word-spacing:0.5rem]'>{tech}</h6>
                </div>
            <div className='flex justify-center gap-5 '>
                <a href={demo} target='_blank'>
                    <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md flex items-center'>
                        Demo 
                        <Image src={externalLink} className='text-white ml-1' height={20} width={20}/> 
                    </button>
                </a>
                <a href={github} target='_blank'>
                    <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md flex items-center'>
                        Code 
                        <Image src={code} className='text-white ml-1' height={20} width={20}/>
                    </button>
                </a>
                </div>
            </div>
        </div>

  )
}
