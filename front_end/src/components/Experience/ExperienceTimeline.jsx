import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Web System Adminstrator",
      company: "SFU CSSS",
      date: "May 2025 - Present",
      description: "Maintain and optimize backend services for new.sfucsss.org website and co-lead dev meetings to plan tasks, review PRs, and onboard contributors serving a student society of 900+ members.",
      skills: ["Nginx", "FastAPI", "PostgreSQL"],
      icon: "code",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "CJSF 90.1FM",
      date: "Apr 2025 - Present",
      description: "I maintain and optimize frontend/backend services, ensuring high availability and data integrity, while collaborating closely with content and technical teams to align web development with user experience and business goals.",
      skills: ["Next.js", "MySQL", "Strapi"],
      icon: "volunteer",
    },
    {
      id: 3,
      title: "Sales Colleague",
      company: "JYSK Canada",
      date: "Jul 2022 - Sept 2023",
      description: "Assisted customers with product selection, maintained accurate inventory records, and optimized store layouts, leading to a 15% rise in positive feedback and a 10% reduction in stock discrepancies.",
      skills: ["Teamwork", "Communication", "Customer Service"],
      icon: "work",
    },
    // {
    //   id: 4,
    //   title: "Volunteer Developer",
    //   company: "Nonprofit Organization",
    //   date: "June 2023 - August 2023",
    //   description: "Volunteered to build a website for a local nonprofit organization. Designed and implemented a donation system and content management system.",
    //   skills: ["WordPress", "PHP", "UI/UX Design"],
    //   icon: "volunteer",
    // },
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case "work":
        return <WorkIcon className="text-gray-800 text-2xl" />;
      case "school":
        return <SchoolIcon className="text-gray-800 text-2xl" />;
      case "code":
        return <CodeIcon className="text-gray-800 text-2xl" />;
      case "volunteer":
        return <VolunteerActivismIcon className="text-gray-800 text-2xl" />;
      default:
        return <WorkIcon className="text-gray-800 text-2xl" />;
    }
  };

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold md:text-4xl mb-3">My Experience</h1>
          <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full mb-12"></div>
          
          <div className="relative w-full max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300 rounded-full"></div>
            
            {/* Timeline items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row md:justify-between mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-3 w-7 h-7 rounded-full bg-white border-4 border-gray-800 z-10"></div>
                
                {/* Timeline content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 border border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                        {getIcon(exp.icon)}
                      </div>
                      <span className="text-sm font-medium text-gray-500">{exp.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                    <p className="text-md font-medium text-gray-600 mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceTimeline;
