import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  // hover class for navbar when user clicks in link
  const hoverClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md p-2 scale-105"
      : "text-black hover:bg-gray-700 hover:text-white rounded-md p-2 hover:scale-105 transition-transform";

  const [isOpen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-10 bg-white  border-gray-200 border-b shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
        <div className="hover:scale-105 transition-transform">
          <NavLink
            to="/"
            className=" flex flex-shrink-0 items-center text-2xl font-bold"
            onClick={toggleNavbar}
          >
            <img
              className="h-14 w-auto rounded-md"
              src={logo}
              alt="personal_logo"
            />
            <span className="ml-2">Puneet North</span>
          </NavLink>
        </div>
        {/* Desktop */}
        <nav className="md:flex hidden space-x-6 text-lg font-normal items-center">
          <NavLink to="/about" className={hoverClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={hoverClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={hoverClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={hoverClass}>
            Contact
          </NavLink>
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
          <NavLink to="/about" className={hoverClass} onClick={toggleNavbar}>
            About
          </NavLink>
          <NavLink to="/projects" className={hoverClass} onClick={toggleNavbar}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={hoverClass} onClick={toggleNavbar}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={hoverClass} onClick={toggleNavbar}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
