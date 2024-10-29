import React from 'react'
import proj1Image from '../../assets/project1.png'
import TransitLogo from "../../assets/project2.png";
import JobsLogo from "../../assets/project3.jpg";

import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
    const projects = [
        {
          id: 1,
          date: 'Oct 2024',
          title: "CraveIt",
          description: "A full-stack application to locate dining options and recipes based on user preferences. Developed RESTful API endpoints with Express.js to integrate third-party APIs",
          imag: proj1Image,
          key1: 'React',
          key2: 'Tailwind',
          key3: 'Express.js',
          link: "https://github.com/p-north/StormHacks2024_CraveIt",
        },
        {
          id: 2,
          date: 'Sept 2024',
          title: "Transit Trip Planner",
          description: 'Developed a Transit Trip Planner using React and integrated Google Maps API to provide users with efficient route options and real-time transit information.',
          imag: TransitLogo,
          key1: 'React',
          key2: 'Tailwind',
          key3: 'Google API',
          link: "https://github.com/mini9yo/FallHacks",
        },
        {
          id: 3,
          date: 'Sept 2024',
          title: "Jobs Board App",
          description:
            "Developed a Jobs Board using React to allow users to view, add, and edit job postings sourced from a mock JSON server! Features CRUD functionality (Create, Read, Update, Delete) for all job listings",
          imag: JobsLogo,
          key1: 'React',
          key2: 'JSON Server',
          key3: 'Tailwind',
          link: "https://github.com/p-north/Job_Listings_Site",
        },
      ];
  return (
    <div>
        <section className='py-20 bg-gray-50'>
        <div className='flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8'>
            <h1 className='text-3xl font-bold md:text-4xl mb-10'>My Projects</h1>
            {/* Projects Holder */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scale-90'>
                {projects.map(function(element, idx){

                  return  <div key={idx} className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 w-full'>
                            <img src={element.imag} alt="projectLogo" className='w-full h-48 object-cover brightness-90' />
                            <div className='p-6 flex flex-col min-h-[240px]'>
                                <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{element.title}</h3>
                                <p className='text-gray-500 text-sm mb-2'>{element.date}</p>
                                <p className='text-gray-600 mb-3'>{element.description}</p>
                                <div className='flex flex-wrap gap-2 mb-3'>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.key1}</span>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.key2}</span>
                                <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.key3}</span>

                                </div>
                                <div className='flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform'>
                                    <NavLink to ='/' className = 'w-full'>
                                        View On Github
                                    </NavLink>
                                </div>
                            </div>
                </div>
                })}

            </div>

        </div>
        </section>
    </div>
  )
}

export default ProjectCard
