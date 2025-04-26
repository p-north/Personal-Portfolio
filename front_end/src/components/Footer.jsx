import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div>
      <footer className='border-t w-full bg-white/75 py-8 text-sm'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-grow items-center justify-between text-gray-600 flex-col md:flex-row'>
              <div className='flex flex-col items-center'>
                <p>
                    &copy; 2024 Developed By Puneet North   
                </p>
                <p>Made With React + Tailwind</p>
              </div>
                
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href='https://github.com/p-north' className ='text-gray-600 flex items-center hover:text-red-500' target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='w-6 h-6 mx-1'/>
                        <span>Github</span>
                    </a>
                    <a href= 'https://www.linkedin.com/in/puneet-north/' className= 'text-gray-600 flex items-center hover:text-blue-500' target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='w-6 h-6 mx-1'/>
                        <span>LinkedIn</span>
                    </a>
                    <a href = 'https://x.com/iXpert_North' className= 'text-gray-600 flex items-center hover:text-black' target="_blank" rel="noopener noreferrer">
                        <XIcon className='w-6 h-6 mx-1'/>
                        <span>Twitter</span>
                    </a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
