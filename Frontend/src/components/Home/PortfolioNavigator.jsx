import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaCertificate,
  FaBriefcase,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const pages = [
  {
    title: "About",
    desc: "Learn about my journey, background, mindset, and goals.",
    icon: <FaUser />,
    link: "/about",
  },
  {
    title: "Projects",
    desc: "Explore the real projects I have built and the work I have done.",
    icon: <FaProjectDiagram />,
    link: "/project",
  },
  {
    title: "Skills",
    desc: "See my technical abilities, tools, and key strengths.",
    icon: <FaTools />,
    link: "/skill",
  },
  {
    title: "Certificates",
    desc: "View my achievements, courses, and learning milestones.",
    icon: <FaCertificate />,
    link: "/certificate",
  },
  {
    title: "Experience",
    desc: "Check my internships, practical exposure, and work roles.",
    icon: <FaBriefcase />,
    link: "/experiance",
  },
  {
    title: "Contact",
    desc: "Reach out to me for opportunities, collaboration, or hiring.",
    icon: <FaEnvelope />,
    link: "/contact",
  },
];

const PortfolioNavigator = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Portfolio Navigation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Explore every section of my portfolio
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            You can directly open any page from here and explore my profile in a
            clear and structured way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-2xl mb-5 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold group-hover:text-green-400 transition duration-300">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {item.desc}
              </p>

              <div className="mt-6 text-green-400 text-sm font-medium flex items-center gap-2">
                Open Page
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioNavigator;