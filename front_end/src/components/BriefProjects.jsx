import React from 'react'
import testLogo from '../assets/Preview.png'
import { NavLink } from 'react-router-dom';

const BriefProjects = () => {
    const projects = [
        {id: 1, title: 'Project 1', description: 'Lorem ipsum descirption here', img:'p1.jpg'},
        {id: 2, title: 'Project 2', description: 'Lorem ipsum descirption here', img:'p2.jpg'},
        {id: 3, title: 'Project 3', description: 'Lorem ipsum descirption here', img:'p3.jpg'},

    ];
  return (
    <div>
      <section className='py-20  bg-gray-50'>
        <div className='mx-auto px-4 sm:px-6 max-w-7xl lg:px-8'>
            <h1 className='text-3xl font-bold md:text-4xl text-center mb-6'>Featured Projects</h1>
            {/* Projects holder */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 mb-6'>
                <img src={testLogo} alt="projectLogo" className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h3 className='text-xl font-semibold mb-2'>Project</h3>
                    <p className='text-gray-600 mb-4'>Description here</p>
                    <div className='flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 transition-colors shadow-md text-black'>
                        <NavLink to ='/projects' className = 'w-full'>
                            View On Github
                        </NavLink>
                    </div>

                </div>
            </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='bg-gray-900 text-white rounded-md p-3   hover:bg-gray-700 transition-colors shadow-md'>
                <NavLink to ='/projects'>
                View All Projects
                </NavLink>
            </button>
        </div>
      </section>
    </div>
  )
}

export default BriefProjects
