// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full pt-32 bg-transparent gap-10">
      {/* About Me Section */}
      <FadeInSection>
        <section
          id="about"
          className="w-full max-w-3xl mx-auto h-[480px] flex flex-col justify-center items-center bg-gray-900/80 rounded-2xl shadow-2xl px-8 py-12 border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <Image
              src="/next.svg"
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-3 text-cyan-400 text-center md:text-left">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat cursus enim, vitae dictum
                libero urna at velit. Cloud Engineer & Programmer.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* Skills Section */}
      <FadeInSection>
        <section
          id="skills"
          className="w-full max-w-3xl mx-auto h-[480px] flex flex-col justify-center items-center bg-gray-900/80 rounded-2xl shadow-2xl px-8 py-12 border border-gray-800"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center w-full">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              AWS
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Azure
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Google Cloud
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Docker
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Kubernetes
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Python
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              JavaScript
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              CI/CD
            </li>
            <li className="bg-gray-800/70 rounded-lg px-4 py-2 text-center shadow-lg backdrop-blur-md border border-cyan-400/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-900/40">
              Terraform
            </li>
          </ul>
        </section>
      </FadeInSection>
      {/* Projects Section */}
      <FadeInSection>
        <section id="projects" className="w-full max-w-3xl mx-auto h-[480px] flex flex-col justify-center items-center bg-gray-900/80 rounded-2xl shadow-2xl px-8 py-12 border border-gray-800 relative overflow-hidden">
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center w-full">Projects</h2>
          <div className="flex flex-col md:flex-row gap-8 w-full h-full items-center justify-center">
            <div className="flex-1 max-w-xs w-full bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-md border border-cyan-400/20 flex flex-col justify-center text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Project One</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="flex-1 max-w-xs w-full bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-md border border-cyan-400/20 flex flex-col justify-center text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Project Two</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* Testimonials Section */}
      <FadeInSection>
        <section id="testimonials" className="w-full max-w-3xl mx-auto h-[480px] flex flex-col justify-center items-center bg-gray-900/80 rounded-2xl shadow-2xl px-8 py-12 border border-cyan-800/40">
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center w-full">Testimonials</h2>
          <div className="flex flex-row gap-8 w-full h-full items-center justify-center">
            <div className="flex-1 max-w-xs w-full bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-md border border-cyan-400/20 flex flex-col justify-center text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg text-gray-200 italic mb-4">
                “Adrian is a fantastic developer! He delivered our project on time and exceeded expectations.”
              </p>
              <span className="block text-cyan-300 font-bold">Jane Doe</span>
              <span className="block text-gray-400 text-sm">CEO, ExampleCorp</span>
            </div>
            <div className="flex-1 max-w-xs w-full bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-md border border-cyan-400/20 flex flex-col justify-center text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg text-gray-200 italic mb-4">“Highly recommend Adrian for any cloud or web project. Professional and creative!”</p>
              <span className="block text-cyan-300 font-bold">John Smith</span>
              <span className="block text-gray-400 text-sm">CTO, TechFlow</span>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="w-full max-w-3xl mx-auto h-[480px] flex flex-col justify-center items-center bg-gray-900/80 rounded-2xl shadow-2xl px-8 py-12 border border-gray-800">
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center w-full">Contact</h2>
          <form className="flex flex-col gap-6 w-full h-full justify-center bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-md border border-cyan-400/20">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition w-full"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition w-full"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-lg p-3 font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:from-cyan-400 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full"
            >
              Send
            </button>
          </form>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Main;
