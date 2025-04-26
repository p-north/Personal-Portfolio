import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import emoji from '../../assets/emoji.png'

const socialLinks = () => {
  return (
    <div>
       <section className='py-10 bg-gray-50'>
   
          <div className='flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8'>
            {/* <img src={emoji} alt="emoji.png" className= 'h-auto w-1/4' /> */}
            {/* Uncomment below to show social links */}
            {/* <div className='flex space-x-4 mx-auto mt-4 py-10 md:scale-150'>
                    <a href='https://github.com/p-north' className='flex items-center hover:text-red-500 hover:scale-110 transition-transform text-lg md:text-xl' target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='w-6 h-6 mx-1'/>
                        <span>Github</span>
                    </a>
                    <a href= 'https://www.linkedin.com/in/puneet-north/' className= 'flex items-center hover:text-blue-500 hover:scale-110 transition-transform text-lg md:text-xl' target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='w-6 h-6 mx-1'/>
                        <span>LinkedIn</span>
                    </a>
                    <a href = 'https://x.com/iXpert_North' className= 'flex items-center hover:text-black hover:scale-110 transition-transform hover:font-semibold text-lg md:text-xl' target="_blank" rel="noopener noreferrer">
                        <XIcon className='w-6 h-6 mx-1 '/>
                        <span>Twitter</span>
                    </a>
                </div>  */}
          </div>
       </section>
    </div>
  )
}

export default socialLinks
