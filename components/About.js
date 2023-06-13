import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/assets/images/avatar.png';

export const About = () => {
  return (
    <section id='about' className='md:flex justify-center items-center md:h-[calc(100vh-88px)] pt-[calc(88px+2.5rem)] md:pt-0 md:mt-[88px]'>
      <div className='md:flex justify-center items-center'>
        <div className='relative flex-shrink-0 bg-gradient-to-b mx-auto md:mr-10 from-teal-500 rounded-full w-60 h-60 overflow-hidden md:h-80 md:w-80'>
          <Image src={avatar} fill style={{objectFit:"contain"}} alt='avatar'/>
        </div>
        <div className='text-center px-10'>
          <h2 className='text-5xl text-teal-500 font-extrabold md:text-6xl'>Dickson</h2>
          <h3 className='text-xl font-extrabold md:text-3xl dark:text-[#f4f4f4]'>Aspiring developer.</h3>
          <p className='text-md py-10 leading-8 md:text-xl md:min-w-[28rem] max-w-lg mx-auto dark:text-[#f4f4f4]'>
            After graduating from university in 2016, I said to myself, <em>"I'm never going back to school"</em>...and guess who got back into studying? <em>Me.</em>
            <br/>
            Well it turned out that learning things that I'm interested in is actually...enjoyable!
            <br/>
            As an aspiring self-taught front-end developer, I'm well aware that learning about coding is a lifelong journey. I'm excited to embark on this new journey
            & any opportunity is greatly appreciated!
          </p>
          <div className='text-4xl flex justify-center gap-12 dark:text-[#f4f4f4] cursor-pointer'>
            <a href='https://github.com/dcksn-c' target='_blank'>
              <AiFillGithub className='hover:text-teal-500 transition' />
            </a>
            <a href='https://www.linkedin.com/in/dickson-choong-407953130/' target='_blank'>
              <AiFillLinkedin className='hover:text-teal-500 transition' />
            </a>
            <a href='mailto:dickson.c94@gmail.com'>
              <AiFillMail className='hover:text-teal-500 transition'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
