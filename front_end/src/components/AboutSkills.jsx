import React, { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import { motion, AnimatePresence } from 'framer-motion';

const AboutSkills = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('languages');

  // Define skills by category
  const skills = {
    languages: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "C", icon: "https://skillicons.dev/icons?i=c" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    ],
    frameworks: [
      { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=next" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=expressjs" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    ],
    tools: [
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "VsCode", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitLab", icon: "https://skillicons.dev/icons?i=gitlab" },
    ]
  };

  // Function to render skill cards with improved design
  const renderSkillCards = (skillArray) => {
    return skillArray.map((skill, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className='group p-4 border border-gray-100 flex flex-col items-center rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 transform hover:translate-y-[-5px]'
      >
        <div className="p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
          <img src={skill.icon} alt={skill.name} className='h-10 w-10' />
        </div>
        <h3 className='mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>{skill.name}</h3>
      </motion.div>
    ));
  };

  // Function for tab indicators with improved styling - adjusted for horizontal layout
  const getTabClass = (tabName) => {
    return `relative flex items-center justify-center gap-1 py-2 px-3 md:px-6 rounded-lg transition-all font-medium text-xs md:text-base flex-1
      ${activeTab === tabName 
        ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md' 
        : 'bg-white text-gray-700 hover:bg-gray-50'}`;
  };

  return (
    <div>
      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center mb-10'>
            <div className="text-center">
              <h1 className='text-3xl font-bold md:text-4xl mb-3'>Technical Skills</h1>
              <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
          </div>
          
          {/* Tab Navigation - Always horizontal */}
          <div className='flex justify-center mb-8'>
            <div className='flex flex-row p-1.5 bg-gray-100 rounded-xl shadow-inner gap-1 md:gap-2 w-full max-w-md'>
              <button 
                onClick={() => setActiveTab('languages')} 
                className={getTabClass('languages')}
              >
                <CodeIcon fontSize="small" className="hidden md:block" /> 
                <span className="whitespace-nowrap">Languages</span>
              </button>
              <button 
                onClick={() => setActiveTab('frameworks')} 
                className={getTabClass('frameworks')}
              >
                <WebIcon fontSize="small" className="hidden md:block" /> 
                <span className="whitespace-nowrap">Frameworks</span>
              </button>
              <button 
                onClick={() => setActiveTab('tools')} 
                className={getTabClass('tools')}
              >
                <BuildIcon fontSize="small" className="hidden md:block" /> 
                <span className="whitespace-nowrap">Tools</span>
              </button>
            </div>
          </div>
          
          {/* Tab Content with improved visuals and animations */}
          <div className='bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto min-h-[450px] border border-gray-100'>
            <AnimatePresence mode="wait">
              {activeTab === 'languages' && (
                <motion.div
                  key="languages"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <h2 className='text-xl font-semibold mb-6 text-gray-800 pb-2 border-b border-gray-100'>Programming Languages</h2>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6'>
                    {renderSkillCards(skills.languages)}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'frameworks' && (
                <motion.div
                  key="frameworks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <h2 className='text-xl font-semibold mb-6 text-gray-800 pb-2 border-b border-gray-100'>Frameworks & Libraries</h2>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6'>
                    {renderSkillCards(skills.frameworks)}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'tools' && (
                <motion.div
                  key="tools"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <h2 className='text-xl font-semibold mb-6 text-gray-800 pb-2 border-b border-gray-100'>Developer Tools</h2>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
                    {renderSkillCards(skills.tools)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSkills
