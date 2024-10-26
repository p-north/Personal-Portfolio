import React from 'react'
import {NavLink } from 'react-router-dom'
import logo from '../assets/Preview.png'

const Navbar = () => {
    // hover class for navbar when user clicks in link
  const hoverClass = ({isActive}) => isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md p-2 scale-105':'text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform';
  return (
    <div>
        <header className='sticky top-0 z-10 bg-white  border-gray-200 border-b shadow-md'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center h-20'>
                <div className='hover:scale-105 transition-transform'>
                <NavLink to = '/'className=' flex flex-shrink-0 items-center text-2xl font-bold'>
                
                <img className = 'h-14 w-auto rounded-md'src={logo} alt="personal_logo" />
                <span className='ml-2'>
                    Puneet North
                </span>
                </NavLink>
                </div>
                <div className='md:ml-auto'>
                    <nav className='flex space-x-6 text-lg font-normal items-center'>
                        <NavLink to= '/about' className = {hoverClass}>About</NavLink>
                        <NavLink to= '/projects' className={hoverClass}>Projects</NavLink>
                        <NavLink to= '/contact' className={hoverClass}>Contact</NavLink>
                        <NavLink to= '/resume' className={hoverClass}>Resume</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
