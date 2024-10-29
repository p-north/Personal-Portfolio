import React from 'react'
import proj1Image from '../../assets/project1.png'
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div>
        <section className='py-20 bg-gray-50'>
        <div className='flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8'>
            <h1 className='text-3xl font-bold md:text-4xl mb-10'>My Projects</h1>
            {/* Projects Holder */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 w-full'>
                            <img src={proj1Image} alt="projectLogo" className='w-full h-48 object-cover brightness-90' />
                            <div className='p-6'>
                                <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Title</h3>
                                <p className='text-gray-500 text-sm mb-2'>Project Date</p>
                                <p className='text-gray-600 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum alias pariatur? Architecto voluptate placeat assumenda in, expedita laboriosam unde natus explicabo atque hic! Recusandae, minima. Voluptate consectetur eligendi facere.</p>
                                <div className='flex flex-wrap gap-2 mb-3'>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>Key1</span>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>Key2</span>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>Key3</span>

                                </div>
                                <div className='flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform'>
                                    <NavLink to ='/' className = 'w-full'>
                                        View On Github
                                    </NavLink>
                                </div>
                            </div>
                </div>

            </div>

        </div>
        </section>
    </div>
  )
}

export default ProjectCard
