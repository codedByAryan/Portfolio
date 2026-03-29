import React from "react";
import { FaRocket, FaUsers, FaLightbulb, FaCheckCircle } from "react-icons/fa";

const growthPoints = [
  {
    title: "What I Learned",
    description:
      "My experience taught me how to work on real projects with better planning, cleaner execution, and stronger attention to detail.",
    icon: <FaLightbulb />,
  },
  {
    title: "Problem Solving Mindset",
    description:
      "I learned how to approach challenges step by step, debug efficiently, and keep improving solutions until they become practical and reliable.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Teamwork & Communication",
    description:
      "Through internship and academic work, I improved my ability to collaborate, understand requirements, and contribute with responsibility.",
    icon: <FaUsers />,
  },
  {
    title: "Growth as a Developer",
    description:
      "These experiences helped me become more confident in development, more disciplined in learning, and more focused on building useful digital products.",
    icon: <FaRocket />,
  },
];

const strengths = [
  "Quick learner with a positive mindset",
  "Able to adapt to new tools and technologies",
  "Focused on practical implementation and delivery",
  "Strong interest in full stack development",
  "Always ready to learn, improve, and contribute",
  "Can turn ideas into working project solutions",
];

const ExperienceGrowth = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute top-20 left-16 w-72 h-72 bg-green-400/10 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-16 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Why Hire Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Turning experience into value
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
            Every internship, training program, and academic responsibility helped
            me build not only technical skills but also the mindset required to
            contribute positively in a professional environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {growthPoints.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:border-green-400/40 hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-3 leading-7">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(74,222,128,0.08)]">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              Recruiter Highlights
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              I bring a combination of learning attitude, technical curiosity,
              project-based exposure, and the willingness to take ownership of work.
              I am continuously improving myself so I can contribute effectively to
              real development teams and meaningful software products.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-green-400/10 bg-black/40 px-4 py-4 text-sm text-gray-300 hover:border-green-400/30 transition duration-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5 text-center">
                <h4 className="text-2xl font-bold text-green-400">Execution</h4>
                <p className="text-gray-400 text-sm mt-2">
                  Focused on building and delivering real solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5 text-center">
                <h4 className="text-2xl font-bold text-green-400">Learning</h4>
                <p className="text-gray-400 text-sm mt-2">
                  Continuously improving through practical experience.
                </p>
              </div>

              <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5 text-center">
                <h4 className="text-2xl font-bold text-green-400">Growth</h4>
                <p className="text-gray-400 text-sm mt-2">
                  Developing confidence, skills, and professional mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrowth;