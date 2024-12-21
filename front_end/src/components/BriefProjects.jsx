import React from "react";
import { NavLink } from "react-router-dom";
import CraveItLogo from "../assets/project1.png";
import TransitLogo from "../assets/project2.png";
import Mindstream from "../assets/minstreamai.png"

const BriefProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CraveIt",
      description: "One-stop food finder app for all your cravings!",
      imag: CraveItLogo,
      type: "View Github",
      link: "https://github.com/p-north/StormHacks2024_CraveIt",
    },
    {
      id: 2,
      title: "Transit Planner",
      description: "Transit route planner for those last minute travel plans!",
      imag: TransitLogo,
      type: "View Github",
      link: "https://github.com/mini9yo/FallHacks",
    },
    {
      id: 3,
      date: "Sept 2024",
      title: "Mindstream AI",
      description:
        "Study tool designed for university students craming for exams!.",
      imag: Mindstream,
      key1: "React",
      key2: "Firebase",
      key3: "Express.js",
      type: "View Demo",
      link: "https://mindstreamai.onrender.com/",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold md:text-4xl text-center mb-10">
            Featured Projects
          </h1>
          {/* Projects holder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(function (element, idx) {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 mb-10"
                >
                  <img
                    src={element.imag}
                    alt="projectLogo"
                    className="w-full h-48 object-cover brightness-90"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {element.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{element.description}</p>
                    <div className="flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform">
                      <a href={element.link} className="w-full" target="_blank">
                        {element.type}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-900 text-white rounded-md p-3   hover:bg-gray-700 shadow-md hover:scale-105 transition-transform">
            <NavLink to="/projects">View All Projects</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BriefProjects;
