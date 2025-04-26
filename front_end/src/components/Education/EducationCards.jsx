import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import sfuLogo from '../../assets/sfu.jpg';

const EducationCards = () => {
  const education = [
    {
      id: 1,
      institution: "Simon Fraser University",
      degree: "Bachelor of Science in Computing Science",
      concentration: "Artificial Intelligence",
      duration: "2022 - Present",
      gpa: "3.8/4.0",
      logo: sfuLogo,
      achievements: [
        "Dean's Honor Roll - 3 Consecutive Semesters",
        "Undergraduate Research Assistant",
        "Computing Science Student Society Member"
      ]
    }
  ];
  
  const certifications = [
    {
      id: 1,
      name: "Machine Learning Specialization",
      issuer: "Coursera & Stanford University",
      date: "June 2023",
      skills: ["Neural Networks", "TensorFlow", "Deep Learning"]
    },
    {
      id: 2,
      name: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "January 2023",
      skills: ["React", "Node.js", "MongoDB"]
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold md:text-4xl mb-12">Education & Certifications</h1>
        
        {/* Main Education Card */}
        <div className="w-full max-w-4xl mb-16">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl border border-gray-100"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-gray-800 flex items-center justify-center p-6">
                  <img className="h-40 w-40 rounded-lg object-cover" src={edu.logo} alt={edu.institution} />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg font-medium text-gray-500">
                        Concentration in {edu.concentration}
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded-full px-4 py-1 text-sm font-medium">
                      {edu.duration}
                    </div>
                  </div>
                  
                  <p className="mt-4 text-lg font-semibold flex items-center gap-2">
                    <SchoolIcon /> {edu.institution}
                  </p>
                  
                  <p className="mt-2 font-medium text-gray-700">
                    GPA: <span className="text-gray-900">{edu.gpa}</span>
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                      <EmojiEventsIcon fontSize="small" /> Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <h2 className="text-2xl font-semibold mb-6">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                <div className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-xs font-medium">
                  {cert.date}
                </div>
              </div>
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <CodeIcon fontSize="small" /> {cert.issuer}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCards;
