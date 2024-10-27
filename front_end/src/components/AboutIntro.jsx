import React from 'react'
import profilePic from '../assets/profilePic.jpg'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HikingIcon from '@mui/icons-material/Hiking';

const AboutIntro = () => {
  return (
    <div>
      <section className='py-20 bg-gray-50'>
        <div className='flex flex-wrap mx-auto items-center justify-center px-4 sm:px-6 max-w-7xl lg:px-8'>
            <div>
            <h1 className='text-3xl font-bold  md:text-4xl'>A Bit About Me!</h1>
            <p className='my-4 text-lg max-w-4xl leading-relaxed text-left'>Hi there, my name is Puneet North and I'm an undergraduate student at Simon Fraser University.</p>
            <p className='my-4 text-lg max-w-4xl leading-relaxed text-left'>Currently in 2nd year, pursuing a Computing Science degree with a concentration in Artifical Intelligence.</p>
            <div>

                <h2 className='text-lg font-bold'>Some of my favourite activites outside of coding:</h2>
                <ul className='list-none space-y-2'>
                    <li className='flex items-center gap-3 mx-2 my-2'>
                        <span><LibraryMusicIcon/></span>
                        Listening to Music
                    </li>
                    <li className='flex items-center gap-3 mx-2 my-2'>
                        <span><FitnessCenterIcon/></span>
                        Working Out
                    </li>
                    <li className='flex items-center gap-3 mx-2 my-2'>
                        <span><AirplanemodeActiveIcon/></span>
                        Local Plane Spotting
                    </li>
                    <li className='flex items-center gap-3 mx-2 my-2'>
                        <span><HikingIcon/></span>
                        Hiking and Exploring Nature
                    </li>
                    
                </ul>
            </div>
            </div>
            <div className=''>
                <img src={profilePic} alt="profilePic" className='h-60 w-60 rounded-md shadow-lg flex-shrink-0 min-w-[240px]border-4 border-gray-200 hover:scale-105 transition-transform brightness-95 cursor-pointer'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutIntro
