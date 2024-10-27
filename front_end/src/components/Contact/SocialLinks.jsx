import React from 'react'
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import emoji from '../../assets/emoji.png'

const socialLinks = () => {
  return (
    <div>
       <section className='py-20 bg-gray-50'>
          <div className='flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8'>
            {/* Use w-1/4 for better responsiveness */}
            <img src={emoji} alt="emoji.png" className= 'h-auto w-1/4' />
            <h1 className='text-3xl font-bold  md:text-4xl'>Connect With Me On</h1>
            <div className='flex space-x-4 mx-auto mt-4 py-10 scale-150'>
                    <NavLink to='https://github.com/p-north' className='flex items-center hover:text-red-500 hover:scale-110 transition-transform'>
                        <GitHubIcon className='w-6 h-6 mx-1'/>
                        <span>Github</span>
                    </NavLink>
                    <NavLink to= 'https://www.linkedin.com/in/puneet-north/' className= 'flex items-center hover:text-blue-500 hover:scale-110 transition-transform'>
                        <LinkedInIcon className='w-6 h-6 mx-1'/>
                        <span>LinkedIn</span>
                    </NavLink>
                    <NavLink to = 'https://x.com/iXpert_North' className= 'flex items-center hover:text-black hover:scale-110 transition-transform hover:font-semibold'>
                        <XIcon className='w-6 h-6 mx-1'/>
                        <span>Twitter</span>
                    </NavLink>
                </div> 
          </div>
       </section>
      
    </div>
  )
}

export default socialLinks
