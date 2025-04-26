import React, { useState } from "react";
import logo from "../assets/Preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import resume from "../assets/Puneet_Resume_SDE.pdf"

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-10 bg-white  border-gray-200 border-b shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
        <div className="hover:scale-105 transition-transform">
          <a
            href="#home"
            className=" flex flex-shrink-0 items-center text-2xl font-bold"
            onClick={toggleNavbar}
          >
            <img
              className="h-14 w-auto rounded-md"
              src={logo}
              alt="personal_logo"
            />
            <span className="ml-2">Puneet North</span>
          </a>
        </div>
        {/* Desktop */}
        <nav className="md:flex hidden space-x-6 text-lg font-normal items-center">
          <a href="#about" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            About
          </a>
          <a href="#education" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            Education
          </a>
          <a href="#experience" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            Experience
          </a>
          <a href="#projects" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            Projects
          </a>
          <a href={resume} className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            Resume
          </a>
          <a href="#contact" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform">
            Contact
          </a>
        </nav>
        {/* Toggle open/close button */}
        <div className="flex items-center md:hidden hover:scale-105">
          <button onClick={toggleNavbar}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/*Dropdown */}
      {isOpen && (
        <nav className="md:hidden flex flex-col p-4 space-y-2 mx-auto">
          <a href="#about" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            About
          </a>
          <a href="#education" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            Education
          </a>
          <a href="#experience" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            Experience
          </a>
          <a href="#projects" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            Projects
          </a>
          <a href="#resume" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            Resume
          </a>
          <a href="#contact" className="text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform" onClick={toggleNavbar}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
