import React from "react";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: <FaCode />,
    value: "MERN",
    label: "Core Stack",
  },
  {
    icon: <FaUserGraduate />,
    value: "8.21",
    label: "Current CGPA",
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
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-sm tracking-[0.2em] uppercase mb-6">
              About Me
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              Building meaningful
              <span className="block text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                digital experiences
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              I am Aryan Chauhan, a Computer Science Engineering student and aspiring
              full stack developer who enjoys creating modern, responsive, and practical
              web applications with clean design and strong logic.
            </p>

            <p className="mt-4 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              My focus is on MERN stack development, problem solving, and building
              projects that reflect real implementation, learning discipline, and
              long-term growth as a developer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-5 py-3 rounded-xl border border-green-400/20 bg-white/5 text-sm text-gray-200">
                Full Stack Development
              </span>
              <span className="px-5 py-3 rounded-xl border border-green-400/20 bg-white/5 text-sm text-gray-200">
                MERN Stack
              </span>
              <span className="px-5 py-3 rounded-xl border border-green-400/20 bg-white/5 text-sm text-gray-200">
                Problem Solving
              </span>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-green-400/15 bg-white/5 p-5 backdrop-blur-sm hover:border-green-400/40 hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-green-400 text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.value}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-start lg:-translate-y-4">
            <div className="absolute top-4 w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] rounded-full bg-green-400/10 blur-[110px]"></div>

            <div className="relative w-full max-w-[460px]">
              <div className="rounded-[32px] border border-green-400/20 bg-white/5 backdrop-blur-md p-5 shadow-[0_0_40px_rgba(74,222,128,0.12)]">
                <div className="rounded-[28px] overflow-hidden border border-green-400/20">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Aryan Chauhan"
                    className="w-full h-[430px] object-cover object-top"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="rounded-2xl bg-black/50 border border-green-400/15 p-4">
                    <p className="text-green-400 text-sm font-semibold">Focus</p>
                    <p className="text-gray-300 text-sm mt-1">Frontend + Backend</p>
                  </div>

                  <div className="rounded-2xl bg-black/50 border border-green-400/15 p-4">
                    <p className="text-green-400 text-sm font-semibold">Strength</p>
                    <p className="text-gray-300 text-sm mt-1">Clean UI & Logic</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 rounded-2xl border border-green-400/20 bg-black/70 backdrop-blur-md px-4 py-3 shadow-lg">
                <p className="text-green-400 text-sm font-semibold">Developer</p>
                <p className="text-gray-300 text-xs mt-1">React • Node • MongoDB</p>
              </div>

              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-green-400/20 bg-black/70 backdrop-blur-md px-4 py-3 shadow-lg">
                <p className="text-green-400 text-sm font-semibold">Goal</p>
                <p className="text-gray-300 text-xs mt-1">Build impactful products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;