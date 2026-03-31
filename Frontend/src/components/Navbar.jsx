import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="bg-[#020617] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold text-green-400">
          Aryan Chauhan
        </Link> 

        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
          
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>

          <Link to="/project" className="hover:text-green-400 transition">
            Projects
          </Link>

          <Link to="/skill" className="hover:text-green-400 transition">
            Skills
          </Link>

          <Link to="/certificate" className="hover:text-green-400 transition">
            Certificates
          </Link>

          <Link to="/experiance" className="hover:text-green-400 transition">
            Experience
          </Link>

          <Link to="/contact" className="relative text-white">
            Contact
            <span className="absolute -bottom-1 left-0 w-full  bg-green-400"></span>
          </Link>
        </div>
         <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-300 text-sm font-medium bg-[#020617]">
          <Link
            to="/"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/project"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/skill"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>

          <Link
            to="/certificate"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </Link>

          <Link
            to="/experiance"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;