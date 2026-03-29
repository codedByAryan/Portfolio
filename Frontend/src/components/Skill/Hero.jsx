import React from "react";
import {
  FaCode,
  FaBrain,
  FaTools,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
} from "react-icons/si";

const technicalSkills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "OOP", icon: <FaCode /> },
  { name: "DSA (Java)", icon: <FaCode /> }
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Leadership",
  "Time Management",
  "Teamwork",
  "Hardworking",
  "Quick Learning",
  "Adaptability",
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Netlify", icon: <SiNetlify /> },
];

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      <div className="absolute top-16 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-sm tracking-[0.2em] uppercase mb-6">
            My Skills
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Skills that help me build
            <span className="block text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
              modern digital products
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8 max-w-3xl mx-auto">
            My skill set combines frontend development, backend fundamentals,
            programming logic, modern tools, and strong soft skills that help me
            create responsive, user-focused, and functional web applications.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 transition duration-300">
            <div className="text-green-400 text-3xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Strong foundation in web development, programming, databases, and
              problem-solving concepts.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 transition duration-300">
            <div className="text-green-400 text-3xl mb-4">
              <FaBrain />
            </div>
            <h3 className="text-2xl font-bold">Soft Skills</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Communication, leadership, discipline, and problem-solving that
              support better teamwork and execution.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 transition duration-300">
            <div className="text-green-400 text-3xl mb-4">
              <FaTools />
            </div>
            <h3 className="text-2xl font-bold">Tools & Workflow</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Tools and platforms that help me develop, test, manage, and deploy
              projects efficiently.
            </p>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          <div className="rounded-[30px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-xl">
                <FaCode />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Technical Skills</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Technologies and programming skills I work with
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-green-400/10 bg-black/50 p-4 flex items-center gap-4 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.12)] transition duration-300"
                >
                  <div className="w-12 h-12 rounded-xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-xl group-hover:scale-110 transition duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[30px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-xl">
                  <FaBrain />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Soft Skills</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Personal strengths that improve my work quality
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-3 rounded-xl border border-green-400/15 bg-black/50 text-gray-200 hover:text-green-400 hover:border-green-400/40 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-xl">
                  <FaTools />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Tools & Technologies</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Platforms and tools I use in development workflow
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-green-400/10 bg-black/50 p-4 flex items-center gap-4 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.12)] transition duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-xl group-hover:scale-110 transition duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-gray-200 font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Frontend</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Building clean, responsive, and attractive user interfaces with
              modern technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Backend</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Learning and creating functional server-side logic, APIs, and
              database-connected applications.
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-green-400/40 transition duration-300">
            <h3 className="text-3xl font-bold text-green-400">Growth Mindset</h3>
            <p className="text-gray-400 mt-3 leading-7 text-sm">
              Constantly learning, practicing, and improving through projects,
              coding problems, and real implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;