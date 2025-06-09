import React from "react";
import proj1Image from "../../assets/project1.png";
import TransitLogo from "../../assets/project2.png";
import JobsLogo from "../../assets/project3.jpg";
import Mindstream from "../../assets/minstreamai.png"
import rottify from "../../assets/rottify.jpg"
import clickRegret from "../../assets/click_regret.png"
import foodConnect from "../../assets/foodconnect.png"



const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      date: "Dec 2024",
      title: "Mindstream AI",
      description:
        "Mindstream AI is an innovative web platform designed to help students efficiently generate study resources such as flashcards, quizzes, podcasts, summaries, and personalized study plans based on uploaded lecture notes.",
      imag: Mindstream,
      key1: "React",
      key2: "Firebase",
      key3: "Express.js",
      type: "View Demo",
      link: "https://mindstreamai.onrender.com/",
    },
    {
      id: 2,
      date: "Oct 2024",
      title: "CraveIt",
      description:
        "A full-stack application to locate dining options and recipes based on user preferences. Developed RESTful API endpoints with Express.js to integrate third-party APIs",
      imag: proj1Image,
      key1: "React",
      key2: "Tailwind",
      key3: "Express.js",
      type: "View On Github",
      link: "https://github.com/p-north/StormHacks2024_CraveIt",
    },
    {
      id: 3,
      date: "Sept 2024",
      title: "Transit Trip Planner",
      description:
        "Developed a Transit Trip Planner using React and integrated Google Maps API to provide users with efficient route options and real-time transit information.",
      imag: TransitLogo,
      key1: "React",
      key2: "Tailwind",
      key3: "Google API",
      type: "View On Github",
      link: "https://github.com/mini9yo/FallHacks",
    },
    {
      id: 4,
      date: "Sept 2024",
      title: "Jobs Board App",
      description:
        "Developed a Jobs Board using React to allow users to view, add, and edit job postings sourced from a mock JSON server! Features CRUD functionality (Create, Read, Update, Delete) for all job listings",
      imag: JobsLogo,
      key1: "React",
      key2: "JSON Server",
      key3: "Tailwind",
      type: "View On Github",
      link: "https://github.com/p-north/Job_Listings_Site",
    },
    {
      id: 5,
      date: "Feb 2025",
      title: "Rottify: AI-Powered Text-to-Video Generator",
      description:
        "Turns text into viral-ready, high-energy microlearning videos using AI. Automatically create engaging content with AI voiceovers, captions, and meme-like visuals.",
      imag: rottify,
      key1: "Supabase",
      key2: "Docker",
      key3: "Next.js",
      type: "View On Github",
      link: "https://github.com/p-north/Rottify-AI-Text-Video",
    },
    {
      id: 6,
      date: "Mar 2025",
      title: "Click AND Regret Minesweeper",
      description:
        "An interactive Minesweeper-inspired game where users pick a difficulty (easy, medium, hard) and click tiles. Land on green tiles to progress; land on red tiles and answer a behavioral or LeetCode question — with surprise jump scares along the way!",
      imag: clickRegret,
      key1: "MySQL",
      key2: "AWS S3",
      key3: "FastAPI",
      type: "View On Github",
      link: "https://github.com/p-north/Click-Regret---Minesweeper-Game",
    },
    {
      id: 7,
      date: "Apr 2025",
      title: "FoodConnect",
      description:
        "FoodConnect is a dynamic web platform designed to bridge the gap between food donors and recipients. It offers a streamlined marketplace for food donations, a real-time chat system powered by web sockets, and advanced filtering tools to ensure equitable access to food for individuals and communities in need.",
      imag: foodConnect,
      key1: "PostgreSQL",
      key2: "AWS (S3, RDS)",
      key3: "Express.js",
      type: "View On Github",
      link: "https://github.com/p-north/Food-Connect",
    },
    
  ].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Sort in descending order
  }
  );
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold md:text-4xl mb-3">My Projects</h1>
          <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full mb-12"></div>
          {/* Projects Holder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scale-90">
            {projects.map(function (element, idx) {
              return (
                <div
                  key={idx}
                  id={element.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 w-full"
                >
                  <img
                    src={element.imag}
                    alt="projectLogo"
                    className="w-full h-48 object-cover brightness-90"
                  />
                  <div className="p-6 flex flex-col min-h-[240px]">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {element.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{element.date}</p>
                    <p className="text-gray-600 mb-3">{element.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                        {element.key1}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                        {element.key2}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                        {element.key3}
                      </span>
                    </div>
                    <div className="flex text-center bg-white hover:bg-gray-900 hover:text-white rounded-md p-3  border border-gray-200 shadow-md text-black hover:scale-105 transition-transform hover:cursor-pointer">
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
      </section>
    </div>
  );
};

export default ProjectCard;
