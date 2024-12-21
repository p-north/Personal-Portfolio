import React from 'react'
import Hero from '../components/Hero'
import BriefIntro from '../components/BriefIntro'
import BriefProjects from '../components/BriefProjects'
import AboutIntro from '../components/AboutIntro'
import AboutSkills from '../components/AboutSkills'
import AboutCourseWork from '../components/AboutCourseWork'

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      <Hero/>
      <AboutIntro/>
      {/* <BriefIntro/> */}
      <AboutSkills/>
      <BriefProjects/>
      <AboutCourseWork/>
    </div>
  )
}

export default Home
