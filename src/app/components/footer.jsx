// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-950 via-gray-900 to-cyan-900/60 border-t border-cyan-800/30 pt-0 pb-6 mt-8 text-center text-gray-400 text-sm relative overflow-hidden">
      {/* Animated SVG Wave */}
      <div aria-hidden="true" className="w-full absolute -top-8 left-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 animate-pulse">
          <path fill="#06b6d4" fillOpacity="0.15" d="M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z;M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z;M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z"
            />
          </path>
        </svg>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <span>&copy; {new Date().getFullYear()} Adrian Neagu. All rights reserved.</span>
        <span>Cloud Engineer & Programmer</span>
        <div className="flex gap-4 justify-center mt-2 md:mt-0">
          <a href="#" className="text-cyan-400 hover:text-cyan-200 transition-colors" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 006.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z" />
            </svg>
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-200 transition-colors" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-200 transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
