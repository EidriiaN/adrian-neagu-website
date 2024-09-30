// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Adrian Neagu</Link>
        </div>
        <div className="block md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <ul className="text-white md:flex md:space-x-6">
            <li className="my-2 md:my-0">
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/about" className="hover:text-gray-400">
                About Me
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/contact" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/contact" className="hover:text-gray-400">
                Skills
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
