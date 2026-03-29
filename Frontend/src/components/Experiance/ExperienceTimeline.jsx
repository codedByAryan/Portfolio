import React from "react";
import { FaLaptopCode, FaCode, FaUserTie, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    role: "Project Engineer",
    company: "Academic Role",
    type: "Professional Experience",
    description:
      "Worked on academic and technical projects, helped in project development, documentation, coordination, and practical implementation of software-related tasks.",
    icon: <FaUserTie />,
  },
  {
    role: "Full Stack Development Intern",
    company: "CodSoft",
    type: "Internship",
    description:
      "Built and improved web-based projects using frontend and backend technologies while gaining practical experience in full stack development workflow.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Intern / Trainee",
    company: "YHills",
    type: "Internship & Training",
    description:
      "Completed training and internship-based learning focused on technical development, project execution, and hands-on implementation skills.",
    icon: <FaCode />,
  },
];

const ExperienceTimeline = () => {
  return (
    <section
      id="experience-timeline"
      className="bg-black text-white py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_30%)]"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Career Path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience that shaped my skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            Each role added practical learning, technical exposure, and a stronger
            foundation for my journey as a developer.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-green-400/20 md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.7)] -translate-x-[7px] md:-translate-x-1/2 top-6"></div>

                <div className="ml-12 md:ml-0 md:w-[46%] rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-xl">
                      {experience.icon}
                    </div>
                    <span className="text-xs tracking-[0.2em] uppercase text-green-400">
                      {experience.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="text-green-400 text-sm mt-2">
                    {experience.company}
                  </p>

                  <p className="text-gray-400 mt-4 leading-7 text-sm">
                    {experience.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                    Professional Growth
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;