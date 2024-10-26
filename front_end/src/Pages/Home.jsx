import React from 'react'
import Hero from '../components/Hero'
import BriefIntro from '../components/BriefIntro'
import BriefProjects from '../components/BriefProjects'

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      <Hero/>
      <BriefIntro/>
      <BriefProjects/>
    </div>
  )
}

export default Home
