import React from 'react'
import Typewriter from 'typewriter-effect'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
    const name = 'Hi, I am'
    const sect = 'Student at SFU. Passionate about learning new technologies, building impactful projects and contributing to the developer community!'

  return (
    <div>
      <section className='py-20 mb-4 border-b'>
        <div className='flex flex-col items-center max-auto px-4 sm:px-6 max-w-7xl lg:px-8'>
            <div>
                <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
                    {name}<Typewriter
                            options={
                                {
                                    strings: ['Puneet North.', 'a University Student.', 'a Problem Solver.', 'a Team Player.', 'a Human.', 'a Creative Mind.'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 40,
                                }
                            }
                    />
                </h1>
                <p className='my-4 text-xl'>{sect}</p>
            </div>
        </div>
        <div className='mt-12 flex justify-center animate-bounce'>
                    <KeyboardArrowDownIcon className='mx-auto h-20' fontSize="large"/>
                </div>
      </section>
    </div>
  )
}

export default Hero
