import React from "react";
import { FaUserGraduate, FaSchool, FaBookOpen } from "react-icons/fa";

const education = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science & Engineering",
    place: "Galgotias University",
    detail:
      "Currently pursuing my degree with strong focus on development, problem solving, and project building.",
    value: "CGPA: 8.21",
    icon: <FaUserGraduate />,
  },
  {
    year: "2023",
    title: "Class 12th (CBSE)",
    place: "Abhinav Vidyalaya School",
    detail:
      "Completed higher secondary education with a solid academic base and growing interest in technology.",
    value: "74%",
    icon: <FaSchool />,
  },
  {
    year: "2021",
    title: "Class 10th (CBSE)",
    place: "St. Thomas School",
    detail:
      "Built the academic foundation that later supported my interest in computer science and development.",
    value: "67%",
    icon: <FaBookOpen />,
  },
];

const AcademicJourney = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-20">
      <div className="absolute top-12 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Academic Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Education that shaped my foundation
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            My academic background reflects discipline, consistency, and the
            foundation that supports my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-xl">
                  {item.icon}
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-green-400">
                  {item.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold group-hover:text-green-400 transition duration-300">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-3">{item.place}</p>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {item.detail}
              </p>

              <div className="mt-5 inline-block px-4 py-2 rounded-lg bg-green-400/10 text-green-400 text-sm border border-green-400/20">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[30px] border border-green-400/15 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4">Academic Role in My Growth</h3>
          <p className="text-gray-400 leading-8 text-base">
            My academic journey helped me build discipline, analytical thinking,
            and the consistency needed for software development. It gave me the
            foundation to understand concepts deeply, apply them through projects,
            and continue growing with a serious and structured mindset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicJourney;