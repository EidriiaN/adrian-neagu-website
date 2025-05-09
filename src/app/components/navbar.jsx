// components/Navbar.js
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950/70 backdrop-blur-xl p-4 fixed w-full z-20 top-0 shadow-2xl border-b border-cyan-700/30 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-400 text-2xl font-extrabold tracking-tight transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-glow">
          <a href="#about">Adrian Neagu</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <button className="text-cyan-400 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <span className="text-3xl animate-pulse">☰</span>
            </button>
          </div>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <ul className="text-cyan-100 md:flex md:space-x-8 font-medium text-lg">
            <li className="my-2 md:my-0 group">
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left"
              >
                About Me
              </a>
            </li>
            <li className="my-2 md:my-0 group">
              <a
                href="#skills"
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left"
              >
                Skills
              </a>
            </li>
            <li className="my-2 md:my-0 group">
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left"
              >
                Projects
              </a>
            </li>
            <li className="my-2 md:my-0 group">
              <a
                href="#testimonials"
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left"
              >
                Testimonials
              </a>
            </li>
            <li className="my-2 md:my-0 group">
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
