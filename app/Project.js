import React from 'react';
import Image from 'next/image';
import code from '../public/assets/icons/code.svg';
import externalLink from '../public/assets/icons/external-link.svg';

export const Project = (props) => {
    const { name, src, tech, description, demo, github } = props.data;
  return (
        <>
            <Image src={src} className='rounded-t-lg object-contain' responsive alt={name}/>
            <div className='h-100 px-4 py-6 my-auto'>
                <div className=''>
                    <h1 className='text-md md:text-xl font-extrabold'>{name}</h1>
                    <p className='p-4 text-md md:text-xl'>{description}</p>
                    <h6 className='font-extrabold text-teal-500 text-md md:text-xl pb-4 [word-spacing:0.5rem]'>{tech}</h6>
                </div>
                <div className='flex justify-center gap-5 text-md md:text-xl'>
                    {demo === '' ? null : 
                        <a href={demo} target='_blank'>
                            <button className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-md text-[#f4f4f4] px-4 py-1 rounded-md flex items-center'>
                                Demo 
                                <Image src={externalLink} className='text-[#f4f4f4] ml-1' height={20} width={20} alt=''/> 
                            </button>
                        </a>}
                    {github === '' ? null : 
                        <a href={github} target='_blank'>
                            <button className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-md text-[#f4f4f4] px-4 py-1 rounded-md flex items-center'>
                                Code 
                                <Image src={code} className='text-[#f4f4f4] ml-1' height={20} width={20} alt=''/>
                            </button>
                        </a>}
                </div>
            </div>
        </>
  )
}
