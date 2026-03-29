import React from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaMedal,
  FaUserTie,
  FaCode,
} from "react-icons/fa";

const highlights = [
  {
    value: "3+",
    label: "Experience Highlights",
    icon: <FaBriefcase />,
  },
  {
    value: "Full Stack",
    label: "Practical Exposure",
    icon: <FaLaptopCode />,
  },
  {
    value: "Growth",
    label: "Learning by Doing",
    icon: <FaMedal />,
  },
];

// 👇 ADD THIS (important)
const experiences = [
  {
    role: "Project Engineer",
    company: "Academic Role",
    type: "Professional Experience",
    description:
      "Worked on academic and technical projects with focus on development, documentation and execution.",
    icon: <FaUserTie />,
  },
  {
    role: "Full Stack Development Intern",
    company: "CodSoft",
    type: "Internship",
    description:
      "Built full stack applications and gained real-world experience in frontend and backend workflow.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Intern / Trainee",
    company: "YHills",
    type: "Internship & Training",
    description:
      "Focused on hands-on learning, project execution, and strengthening development fundamentals.",
    icon: <FaCode />,
  },
];

const Hero = () => {
  return (
    <section className="min-h-[92vh] bg-black text-white relative overflow-hidden pt-24 pb-16">
      <div className="absolute top-16 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-sm tracking-[0.2em] uppercase mb-6">
              My Experience
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              Learning through
              <span className="block text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                real work and real projects
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              My experience combines internships, practical training, and project
              involvement that helped me understand how development works in real
              scenarios and how technical learning translates into execution.
            </p>

            <p className="mt-4 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              These opportunities gave me confidence, stronger development habits,
              and a better understanding of teamwork, project workflow, and building
              useful digital solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experience-timeline"
                className="px-7 py-3 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transition duration-300"
              >
                Explore Experience
              </a>

              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border border-green-400/30 text-green-400 font-semibold hover:bg-green-400/10 hover:scale-105 transition duration-300"
              >
                Let’s Connect
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (UPDATED 🔥) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-green-400/10 blur-[110px]"></div>

            <div className="relative w-full max-w-[520px]">
              <div className="rounded-[28px] border border-green-400/20 bg-white/5 backdrop-blur-md p-5 shadow-[0_0_40px_rgba(74,222,128,0.12)]">
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-green-400/10 bg-black/60 p-5 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-xl group-hover:scale-110 transition duration-300">
                          {exp.icon}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <h3 className="text-white font-semibold text-lg group-hover:text-green-400 transition">
                                {exp.role}
                              </h3>
                              <p className="text-gray-300 text-sm mt-1">
                                {exp.company}
                              </p>
                            </div>

                            <span className="text-xs tracking-[0.18em] uppercase text-green-400 border border-green-400/20 px-3 py-1 rounded-full">
                              {exp.type}
                            </span>
                          </div>

                          <p className="text-gray-400 text-sm mt-3 leading-7">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-4 rounded-2xl border border-green-400/20 bg-black/70 backdrop-blur-md px-4 py-3 shadow-lg">
                <p className="text-green-400 text-sm font-semibold">
                  Professional Journey
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Internships • Training • Execution
                </p>
              </div>

              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-green-400/20 bg-black/70 backdrop-blur-md px-4 py-3 shadow-lg">
                <p className="text-green-400 text-sm font-semibold">
                  Core Strength
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Development • Learning • Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;