import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] w-full text-center overflow-hidden bg-gradient-to-br from-cyan-900 via-gray-900 to-gray-950">
      <div
        className="absolute inset-0 pointer-events-none animate-pulse opacity-30"
        style={{ background: "radial-gradient(circle at 60% 40%, #22d3ee 0%, transparent 70%)" }}
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-300 drop-shadow-glow animate-fade-in-down">Adrian Neagu</h1>
      <p className="mt-6 text-xl md:text-2xl text-cyan-100 animate-fade-in-up">Creative Full Stack Developer</p>
      <div className="mt-10 flex gap-4 justify-center animate-fade-in-up">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-cyan-500/80 hover:bg-cyan-400 text-white font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 animate-bounce"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-cyan-200 font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
