import React from 'react'
import AboutIntro from '../components/AboutIntro'
import AboutSkills from '../components/AboutSkills'
import AboutCourseWork from '../components/AboutCourseWork'

const About = () => {
  return (
    <div className='container mx-auto px-4'>
      <AboutIntro/>
      <AboutSkills/>
      <AboutCourseWork/>
    </div>
  )
}

export default About


