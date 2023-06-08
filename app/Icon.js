import React from 'react';
import Image from 'next/image';

export const Icon = (props) => {
  const { name, src } = props.data;
   
  return (
    <div className=' text-center shadow-lg p-6 rounded-xl dark:bg-white relative'>
      <Image height={50} width={50} src={src} className='mx-auto' alt={name}/>
      <div className='group backdrop-blur-[5px] absolute rounded-xl top-0 left-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-[250ms] w-full h-full flex items-center justify-center'>
        <h3 className='text-lg font-medium text-white translate-y-3 group-hover:translate-y-0 duration-[250ms]'>{name}</h3>
      </div>    
    </div>
  )
}

