import React from "react";
import {
  FaBrain,
  FaRocket,
  FaCode,
  FaBolt,
  FaUserCheck,
  FaLightbulb,
} from "react-icons/fa";

const qualities = [
  {
    icon: <FaBrain />,
    title: "Positive Mindset",
    desc: "I believe growth comes from consistency, discipline, and a willingness to learn from every challenge. I stay focused on improvement and always look for better ways to solve problems.",
  },
  {
    icon: <FaCode />,
    title: "Practical Developer",
    desc: "I do not just study concepts. I apply them by building real projects, improving interfaces, writing logic, and learning through implementation.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Oriented",
    desc: "Every project I build helps me become more confident, more skilled, and more prepared for real-world opportunities in software development.",
  },
  {
    icon: <FaBolt />,
    title: "Quick Learner",
    desc: "I adapt fast, learn new tools with interest, and enjoy exploring technologies that help me build better products and better experiences.",
  },
  {
    icon: <FaUserCheck />,
    title: "Reliable Team Member",
    desc: "I value communication, responsibility, and commitment. I always try to contribute with sincerity, learning attitude, and a professional approach.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    desc: "I enjoy breaking complex problems into smaller parts and finding clean, useful, and practical solutions through code and logic.",
  },
];

const WhyHireMe = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-sm tracking-[0.2em] uppercase mb-6">
            Why Hire Me
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            A developer with the
            <span className="block text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
              right mindset and real intent
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-8">
            I am someone who believes that strong results come from strong effort.
            I stay positive, keep learning, and try to improve myself through
            projects, practice, and consistency. For me, development is not only
            about writing code, but also about solving problems, creating value,
            and growing with every experience.
          </p>

          <p className="text-gray-400 mt-4 text-base md:text-lg leading-8">
            I bring curiosity, discipline, and a builder mindset. I enjoy turning
            ideas into real digital products and I am always ready to learn,
            adapt, and contribute in meaningful ways. I want to be the kind of
            developer who is trusted not only for technical skills, but also for
            attitude, responsibility, and continuous growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300"
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
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Consistency</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              I believe regular effort and daily improvement build long-term success.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Curiosity</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              I like exploring new ideas, better approaches, and modern technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Commitment</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              I take my learning and work seriously and try to deliver with honesty and focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;