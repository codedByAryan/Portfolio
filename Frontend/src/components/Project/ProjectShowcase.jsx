import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "DineSpot",
    type: "Restaurant Booking Platform",
    desc: "A smart restaurant finder and booking platform where users can explore restaurants, view menus, and reserve tables.",
    github: "https://github.com/codedByAryan/DineSpot"
  },
  {
    title: "SigmaGPT",
    type: "AI Web Application",
    desc: "An AI-powered text generation application built to deliver prompt-based responses with a modern interface.",
    github: "https://github.com/codedByAryan/Sigma"
  },
  {
    title: "StayEase",
    type: "Villa Booking Website",
    desc: "A modern booking platform for villas with a smooth user experience and visually appealing layout.",
  },
  {
    title: "Tour Management System",
    type: "Travel Service Platform",
    desc: "A system designed to manage tours, destinations, and travel-related information in an organized way.",
    github: "https://github.com/codedByAryan/Online-Tour-management-system"
  },
  {
    title: "Voice to Text Converter",
    type: "Utility Application",
    desc: "A lightweight and useful project that converts spoken input into text using browser-based features.",
  },
  {
    title: "Tic Tac Toe",
    type: "Interactive Game",
    desc: "A fun and responsive game project that demonstrates logic handling and interactive UI design.",
  },
  {
    title: "Calculator",
    type: "Frontend Tool",
    desc: "A simple but polished calculator application focused on layout, responsiveness, and accuracy.",
  },
  {
    title: "Todo List",
    type: "Task Manager",
    desc: "A clean task management app for adding, organizing, and tracking day-to-day activities.",
  },
  {
    title: "Shoe Brand Landing Page",
    type: "Modern Product Landing Page",
    desc: "A stylish brand-focused landing page designed to showcase products with a modern presentation.",
  },
  {
    title: "Bookstore Website",
    type: "E-Commerce Interface",
    desc: "A bookstore UI project with a structured layout to display books and improve browsing experience.",
  },
];

const ProjectShowcase = () => {
  return (
    <section
      id="project-showcase"
      className="bg-black text-white relative overflow-hidden py-20"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Project Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            A showcase of what I have built
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            Each project represents my learning journey, creativity, and hands-on
            development experience across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.github, "_blank")}
              className="group rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs tracking-[0.2em] uppercase text-green-400">
                  Project {index + 1}
                </span>

                <div className="flex gap-3 text-gray-400">
                  <button className="hover:text-green-400 transition duration-300">
                    <FaGithub />
                  </button>
                  <button className="hover:text-green-400 transition duration-300">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition duration-300">
                {project.title}
              </h3>

              <p className="text-green-400 text-sm mt-3">{project.type}</p>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {project.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                View Details
                <span className="translate-y-[1px] group-hover:translate-x-1 transition duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;