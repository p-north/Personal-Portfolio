import React from 'react'
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';



const Footer = () => {
  return (
    <div>
      <footer className='border-t w-full bg-white/75 py-8 text-sm'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-grow items-center justify-between text-gray-600'>
              <div className='flex flex-col items-center'>
                <p>
                    &copy; 2024 Developed By Puneet North   
                </p>
                <p>Made With React + Tailwind</p>
              </div>
                
                <div className='flex space-x-4'>
                    <NavLink to='https://github.com/p-north' className ='text-gray-600 flex items-center hover:text-red-500'>
                        <GitHubIcon className='w-6 h-6 mx-1'/>
                        <span>Github</span>
                    </NavLink>
                    <NavLink to= 'https://www.linkedin.com/in/puneet-north/' className= 'text-gray-600 flex items-center hover:text-blue-500'>
                        <LinkedInIcon className='w-6 h-6 mx-1'/>
                        <span>LinkedIn</span>
                    </NavLink>
                    <NavLink to = 'https://x.com/iXpert_North' className= 'text-gray-600 flex items-center hover:text-black'>
                        <XIcon className='w-6 h-6 mx-1'/>
                        <span>Twitter</span>
                    </NavLink>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
