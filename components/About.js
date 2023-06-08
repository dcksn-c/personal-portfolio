import React from 'react';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/assets/images/avatar.png';

export const About = () => {
  return (
    <section id='about' className='md:flex justify-center items-center md:h-screen mt-16 md:mt-0'>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Dickson</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Aspiring developer.</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
      </div>
        
      <div className='relative flex-shrink-0 bg-gradient-to-b mx-auto from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
        <Image src={avatar} fill style={{objectFit:"cover"}}/>
      </div>
    </section>
  )
}
