import React from 'react';
import resume from '../../assets/Puneet_North_Resume.pdf';
import { Document, Page } from 'react-pdf';
import {pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

const ResumeHolder = () => {
  return (
    <div>
        <section className="py-20 bg-gray-50">
          <div className="flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold md:text-4xl mb-10">My Resume</h1>
            <div className='bg-white p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-2/3 border border-gray-300'>
                <div className='text-gray-700 leading-relaxed text-justify flex justify-center'>
                 <Document file={resume}>
                    <Page pageNumber={1}/>
                 </Document>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
              <button className='bg-gray-900 text-white rounded-md p-3 hover:bg-gray-700 hover:scale-105 transition-transform shadow-md'>
                <a href={resume} download={resume}>Download Resume</a>
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ResumeHolder

