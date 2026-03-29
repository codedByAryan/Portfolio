import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaBullseye,
  FaRocket,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

const journey = [
  {
    title: "Who I Am",
    desc: "A focused and growth-oriented developer who enjoys building real projects, improving through practice, and learning by implementation.",
    icon: <FaCode />,
  },
  {
    title: "What I Do",
    desc: "I build frontend and full stack applications using React, Tailwind CSS, Java, Node.js, Express, MongoDB, and related web technologies.",
    icon: <FaLaptopCode />,
  },
  {
    title: "What Drives Me",
    desc: "I am motivated by progress, real problem solving, and the satisfaction of turning ideas into useful and modern digital products.",
    icon: <FaBullseye />,
  },
];

const strengths = [
  "Problem Solving",
  "Responsive Web Design",
  "Backend Development",
  "Full Stack Learning",
  "Clean UI Building",
  "Team Collaboration",
  "Project Development",
  "Continuous Learning",
];

const DeveloperMindset = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-20">
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Why Hire Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            A positive mindset with
            <span className="block text-green-400 mt-2">
              a builder’s approach
            </span>
          </h2>
          <p className="text-gray-400 mt-6 text-base md:text-lg leading-8">
            I believe strong results come from discipline, consistency, curiosity,
            and practical work. I do not just learn concepts — I apply them through
            projects, problem solving, and real implementation.
          </p>
          <p className="text-gray-400 mt-4 text-base md:text-lg leading-8">
            I want to be known as a developer who is not only technically improving,
            but also reliable, growth-oriented, and serious about building meaningful
            digital products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="grid md:grid-cols-3 gap-6">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-2xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-400 mt-4 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-8">Core Strengths</h2>

              <div className="flex flex-wrap gap-4">
                {strengths.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-3 rounded-xl border border-green-400/15 bg-black/50 text-gray-200 hover:text-green-400 hover:border-green-400/40 transition duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm">
                <FaRocket className="text-green-400 text-2xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Consistency</h3>
                <p className="text-gray-400 text-sm mt-3 leading-7">
                  I improve through regular practice and real work.
                </p>
              </div>

              <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm">
                <FaLightbulb className="text-green-400 text-2xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Curiosity</h3>
                <p className="text-gray-400 text-sm mt-3 leading-7">
                  I enjoy learning new tools and exploring better solutions.
                </p>
              </div>

              <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm">
                <FaBrain className="text-green-400 text-2xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Ownership</h3>
                <p className="text-gray-400 text-sm mt-3 leading-7">
                  I take my growth, projects, and responsibilities seriously.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-start lg:-translate-y-6">
            <div className="absolute -top-10 w-[420px] h-[420px] rounded-full bg-green-400/10 blur-[140px]"></div>

            <div className="relative w-full max-w-[500px]">
              <div className="rounded-[28px] border border-green-400/20 bg-black/80 backdrop-blur-xl shadow-[0_0_50px_rgba(74,222,128,0.18)] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-green-400/10">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="ml-3 text-gray-400 text-xs">developer_terminal</p>
                </div>

                <div className="p-6 font-mono text-sm leading-7 text-gray-300">
                  <p><span className="text-green-400">$</span> who am i</p>
                  <p className="ml-4 text-white">Aryan Chauhan</p>

                  <p className="mt-4"><span className="text-green-400">$</span> role</p>
                  <p className="ml-4 text-white">Aspiring Full Stack Developer</p>

                  <p className="mt-4"><span className="text-green-400">$</span> skills</p>
                  <p className="ml-4">React • Java • Node.js • MongoDB • Tailwind</p>

                  <p className="mt-4"><span className="text-green-400">$</span> mindset</p>
                  <p className="ml-4">Consistent • Curious • Growth Oriented</p>

                  <p className="mt-4"><span className="text-green-400">$</span> philosophy</p>
                  <p className="ml-4">Learn by building real projects</p>

                  <p className="mt-4"><span className="text-green-400">$</span> status</p>
                  <p className="ml-4 text-green-400">
                    Open to internships & opportunities 🚀
                  </p>

                  <p className="mt-6">
                    <span className="text-green-400">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 px-4 py-2 rounded-xl bg-black/80 border border-green-400/20 text-green-400 text-xs shadow-md">
                Developer Mindset
              </div>

              <div className="absolute -bottom-8 -right-6 px-4 py-2 rounded-xl bg-black/80 border border-green-400/20 text-green-400 text-xs shadow-md">
                Real Builder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperMindset;