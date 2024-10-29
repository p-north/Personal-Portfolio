import React from 'react'
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


const AboutSkills = () => {
  return (
    <div>
      <section className='py-20 bg-gray-50'>
        <div className='flex justify-center mb-10'>
            <h1 className='text-3xl font-bold  md:text-4xl'>Development Skills</h1>
        </div>
        {/* Grid with icons */}
        <div className='flex justify-center'>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                <img src="https://skillicons.dev/icons?i=python" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Python</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=cpp" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>C++</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=c" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>C</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=js" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>JavaScript</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=html" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>HTML</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=css" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>CSS</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=react" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>React.js</h1>
            </div>
            
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=nodejs" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Node.js</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=expressjs" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Express.js</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=tailwind" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Tailwind</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=git" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Git</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=vscode" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>VsCode</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=figma" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Figma</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-black bg-white rounded-md cursor-pointer'>
                {/* <SiCplusplus className='text-8xl'/> */}
                <img src="https://skillicons.dev/icons?i=github" alt="cpp" className='h-20 mt-2' />
                <h1 className='mt-4 font-semibold'>Github</h1>
            </div>
            
            
            {/* <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <IoLogoJavascript className='text-8xl'/>
                <h1 className='mt-1'>JavaScript</h1>
            </div>
            
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <FaHtml5 className='text-8xl'/>
                <h1 className='mt-1'>HTML</h1>
            </div>
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <FaCss3 className='text-8xl'/>
                <h1 className='mt-1'>CSS</h1>
            </div>
            
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <FaReact className='text-8xl'/>
                <h1 className='mt-1'>React.js</h1>
            </div>
            
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <DiNodejs className='text-8xl'/>
                <h1 className='mt-1'>Node.js</h1>
            </div>
            
            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <SiExpress className='text-8xl'/>
                <h1 className='mt-1'>Express.js</h1>
            </div>

            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <RiTailwindCssFill className='text-8xl'/>
                <h1 className='mt-1'>Tailwind</h1>
            </div>

            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <FaGitAlt className='text-8xl'/>
                <h1 className='mt-1'>Git</h1>
            </div>

            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <FaNpm className='text-8xl'/>
                <h1 className='mt-1'>Npm</h1>
            </div>

            <div className='hover:shadow-2xl p-2 border border-gray-400 flex flex-col items-center hover:scale-110 transition-transform shadow-md text-white bg-black rounded-md cursor-pointer'>
                <VscVscode className='text-8xl'/>
                <h1 className='mt-1'>VsCode</h1>
            </div>
             */}
            
           

        </div>
        </div>

      </section>
    </div>
  )
}

export default AboutSkills
