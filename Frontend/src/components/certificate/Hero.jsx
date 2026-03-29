import React from "react";
import { FaCertificate, FaJava, FaStar } from "react-icons/fa";

const highlights = [
  {
    value: "10+",
    label: "Certificates Earned",
    icon: <FaCertificate />,
  },
  {
    value: "Java",
    label: "Strong Learning Focus",
    icon: <FaJava />,
  },
  {
    value: "Growth",
    label: "Continuous Upskilling",
    icon: <FaStar />,
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
              My Certificates
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              Proof of learning,
              <span className="block text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                growth and dedication
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              These certifications reflect my commitment to learning, improving
              my technical skills, and preparing myself for real-world software
              opportunities through training, internships, and continuous practice.
            </p>

            <p className="mt-4 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              From Java and Python to DSA, software testing, and internship
              programs, each certificate represents consistency, curiosity, and
              my effort to grow as a better developer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#certificate-grid"
                className="px-7 py-3 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transition duration-300"
              >
                View Certificates
              </a>

              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border border-green-400/30 text-green-400 font-semibold hover:bg-green-400/10 hover:scale-105 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-start">
            <div className="absolute top-0 w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] rounded-full bg-green-400/10 blur-[110px]"></div>

            <div className="w-full max-w-[430px] lg:mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:border-green-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300 ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="text-green-400 text-2xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold">{item.value}</h3>
                    <p className="text-gray-400 text-sm mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-green-400 uppercase tracking-[0.22em] text-xs mb-3">
                  What These Show
                </p>
                <p className="text-gray-300 leading-7 text-sm">
                  These certificates are not just achievements. They show my
                  learning mindset, my discipline, and my effort to build a
                  strong foundation in programming, problem solving, and
                  professional development.
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