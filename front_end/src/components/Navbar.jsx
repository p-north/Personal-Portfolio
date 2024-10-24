import React from 'react'
import {NavLink } from 'react-router-dom'
import logo from '../assets/personal_logo.svg'

const Navbar = () => {
  return (
    <div>
        <header className='sticky top-0 z-10 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <NavLink to = '/'className=' flex flex-shrink-0 items-center text-2xl font-bold'>
                
                <img className = 'h-10 w-auto'src={logo} alt="personal_logo" />
                <span className='ml-2'>
                    PuneetNorth
                </span>
                </NavLink>
                <nav className='md:flex space-x-4'>
                    <NavLink to= '/about' className='hover:text-blue-500 transition-colors'>About</NavLink>
                    <NavLink to= '/projects' className='hover:text-blue-500 transition-colors'>Projects</NavLink>
                    <NavLink to= '/contact' className='hover:text-blue-500 transition-colors'>Contact</NavLink>
                    <NavLink to= '/resume' className='hover:text-blue-500 transition-colors'>Resume</NavLink>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar
