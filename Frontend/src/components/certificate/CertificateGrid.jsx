import React from "react";
import {
  FaCertificate,
  FaJava,
  FaPython,
  FaAward,
  FaLaptopCode,
  FaUserGraduate,
  FaMedal,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certificates = [
  {
    title: "Java Beginner Zero to Hero",
    category: "Programming",
    icon: <FaJava />,
    issuer: "Course Certificate",
    link: "public/Certificates/JavaBeginner.png",
  },
  {
    title: "Advanced Java",
    category: "Programming",
    icon: <FaJava />,
    issuer: "Course Certificate",
    link: "public/Certificates/DSusingJAVA.png",
  },
  {
    title: "Python",
    category: "Programming",
    icon: <FaPython />,
    issuer: "Course Certificate",
    link: "public/Certificates/Python.pdf",
  },
  {
    title: "Design Thinking",
    category: "Innovation",
    icon: <FaAward />,
    issuer: "Training Program",
    link: "public/Certificates/Thinking.jpg",
  },
  {
    title: "Dextrix Hackathon Participation",
    category: "Hackathon",
    icon: <FaMedal />,
    issuer: "Participation Certificate",
    link: "https://your-certificate-link-5.com",
  },
  {
    title: "DSA in Java - Apna College",
    category: "Data Structures & Algorithms",
    icon: <FaLaptopCode />,
    issuer: "Learning Certificate",
    link: "public/Certificates/ApnaCollege.jpg",
  },
  {
    title: "CodSoft Internship Completion",
    category: "Internship",
    icon: <FaCertificate />,
    issuer: "Internship Certificate",
    link: "public/Certificates/codsoft.jpg",
  },
  {
    title: "YHills Training Certificate",
    category: "Training",
    icon: <FaUserGraduate />,
    issuer: "Training Certificate",
    link: "public/Certificates/YhillsCourse.jpg",
  },
  {
    title: "YHills Internship Completion",
    category: "Internship",
    icon: <FaCertificate />,
    issuer: "Internship Certificate",
    link: "public/Certificates/YhillsIntern.jpg",
  },
  {
    title: "Software Testing",
    category: "Testing",
    icon: <FaStar />,
    issuer: "Technical Certificate",
    link: "https://your-certificate-link-10.com",
  },
  {
    title: "Accenture Go for Gold Program",
    category: "Career Development",
    icon: <FaAward />,
    issuer: "Program Certificate",
    link: "public/Certificates/Accenture.jpg",
  },
  {
    title: "National Financial Literacy Quiz",
    category: "Career Development",
    icon: <FaAward />,
    issuer: "Program Certificate",
    link: "public/Certificates/Quiz.jpg",
  },

  {
    title: "Oracle Database Design",
    category: "Database Design",
    icon: <FaAward />,
    issuer: "Technical Certificate",
    link: "public/Certificates/Oracle.jpg",
  }

];

const CertificateGrid = () => {
  return (
    <section
      id="certificate-grid"
      className="bg-black text-white relative overflow-hidden py-20"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
            Achievement Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Certifications that support my journey
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            These achievements highlight my active learning mindset and my
            effort to strengthen both technical and professional skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <a
              key={index}
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-green-400/15 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition duration-300 block"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs tracking-[0.2em] uppercase text-green-400">
                  Certificate {index + 1}
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-green-400/15 bg-green-400/10 flex items-center justify-center text-green-400 text-lg">
                    {certificate.icon}
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-green-400 transition duration-300" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition duration-300">
                {certificate.title}
              </h3>

              <p className="text-green-400 text-sm mt-3">
                {certificate.category}
              </p>

              <p className="text-gray-400 mt-3 leading-7 text-sm">
                {certificate.issuer}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                Open Certificate
                <span className="translate-y-[1px] group-hover:translate-x-1 transition duration-300">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGrid;