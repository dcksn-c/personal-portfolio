"use client"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export const NavBar = () => {
  const {systemTheme, theme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);

  const [navbar, setNavbar] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    setMounted(true)
  },[])

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className='dark:text-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 md:flex fixed top-0 z-10 w-full bg-[#f4f4f4] shadow-md py-4'>
      <div className=' flex justify-between items-center py-3 md:py-3'>
        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setNavbar(!navbar)} activeClass="active">
          <h1 className='text-2xl font-burtons font-bold cursor-pointer relative hover:text-teal-500 duration-300'>Dickson</h1>
        </Link>

        <div className='flex items-center md:hidden'>
          <div className='px-4 text-xl'>
            {currentTheme === 'dark' ? (<BsFillMoonStarsFill onClick={() => setTheme('light')} className='cursor-pointer'/>) : (<BsFillMoonStarsFill onClick={() => setTheme('dark')} className='cursor-pointer'/>)}
          </div>
          <button className='pl-4 rounded-md outline-none text-2xl' onClick={() => setNavbar( !navbar )}>
            {navbar ? <FaTimesCircle /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`flex-1 md:flex justify-end ${ navbar ? 'block' : 'hidden' }`}>
        <ul className='h-screen items-center md:h-auto md:flex'>
          <li className='text-left font-extrabold text-xl pb-4 md:pb-0 md:text-xl md:px-4 cursor-pointer hover:text-teal-500 duration-300'>
            <Link to="skills" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNavbar(!navbar)} activeClass="active">
              Languages
            </Link>
          </li>

          <li className='text-left font-extrabold text-xl pb-6 md:pb-0 md:text-xl md:px-4 cursor-pointer hover:text-teal-500 duration-300'>
            <Link to="projects" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNavbar(!navbar)} activeClass="active">
              Projects
            </Link>
          </li>

          <li className='text-left font-extrabold text-xl md:pb-0 md:text-xl md:px-4 cursor-pointer '>
            <a className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-md text-white px-4 py-2 rounded-md" href='/assets/resume/resume.pdf' target='_blank'>Resume</a>
          </li>

          <li className='hidden md:block text-left uppercase md:text-xl md:pl-4 cursor-pointer '>
            {currentTheme === 'dark' ? (<BsFillMoonStarsFill onClick={() => setTheme('light')} className='cursor-pointer'/>) : (<BsFillMoonStarsFill onClick={() => setTheme('dark')} className='cursor-pointer'/>)}
          </li>
        </ul>
      </div>
    </nav>
  )
}
