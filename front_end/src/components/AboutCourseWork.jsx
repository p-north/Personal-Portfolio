import React from 'react'
import sfuLogo from '../assets/sfu.jpg'
import { NavLink } from 'react-router-dom'


const AboutCourseWork = () => {
  const courses = [
    {
      title: 'MACM 101', semester: 'Spring 2024', description: 'Discrete Mathematics Course', courseLink: 'https://www.sfu.ca/outlines.html?2024/spring/macm/101/d200', skill1: 'Graph Theory', skill2: 'Induction', skill3: 'Set Theory' 
    },
    
    {
      title: 'Math 232', semester: 'Summer 2024', description: 'Applied Linear Algebra', courseLink: 'https://www.sfu.ca/outlines.html?2024/summer/math/232/d100', skill1: 'Matrices', skill2: 'Determinants', skill3: 'Markov Chains' 
    },
    
    {
      title: 'CMPT 225', semester: 'Summer 2024', description: 'Data Structures & Programming', courseLink: 'https://www.sfu.ca/outlines.html?2024/summer/cmpt/225/d200', skill1: 'Graphs', skill2: 'Algorithims', skill3: 'Trees' 
    },
    {
      title: 'CMPT 276', semester: 'Fall 2024', description: 'Intro Software Engineering', courseLink: 'https://www.sfu.ca/outlines.html?2024/fall/cmpt/276/d200', skill1: 'SDLC', skill2: 'Testing', skill3: 'Documentation' 
    },
    {
      title: 'CMPT 310', semester: 'Fall 2024', description: 'Intro Artificial Intelligence', courseLink: 'https://www.sfu.ca/outlines.html?2024/fall/cmpt/310/d200', skill1: 'Adversarial Search', skill2: 'CSPs', skill3: 'Markov Decisions' 
    },
    
  ];
  return (
    <div>
      <section className='py-20 bg-gray-50'>
        <div className='flex flex-col items-center mb-10'>
            <h1 className='text-3xl font-bold md:text-4xl mb-10'> Relevant Course Work</h1>
            {/* Projects holder */}
            {/* 
            {projects.map(function(element, idx){

               return <div key={idx} className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 mb-10'>
                    <img src={element.imag} alt="projectLogo" className='w-full h-48 object-cover brightness-90' />
                    <div className='p-4'>
                        <h3 className='text-xl font-semibold mb-2'>{element.title}</h3>
                        <p className='text-gray-600 mb-4'>{element.description}</p>
                        <div className='flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform'>
                            <NavLink to ={element.link} className = 'w-full'>
                                View Course Outline
                            </NavLink>
                        </div>

                    </div>
                </div>
            })}
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scale-90'>
              {courses.map(function(element, idx){
                  
                  return <div key={idx} className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 mb-10 max-w-sm'>
                        <img src={sfuLogo} alt="projectLogo" className='w-full h-48 object-cover brightness-90' />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold mb-2'>{element.title}</h3>
                            <p className='text-gray-500 text-sm mb-2'>{element.semester}</p>
                            <p className='text-gray-600 mb-4'>{element.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                              <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.skill1}</span>
                              <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.skill2}</span>
                              <span className='text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1'>{element.skill3}</span>

                            </div>
                            <div className='flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform'>
                                <NavLink to ='/' className = 'w-full'>
                                    View Course Outline
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

export default AboutCourseWork
