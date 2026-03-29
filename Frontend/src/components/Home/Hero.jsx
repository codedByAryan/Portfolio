import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-black text-white flex items-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative z-10">
            <p className="inline-block text-green-400 border border-green-400/30 bg-green-400/10 px-4 py-2 rounded-full text-sm tracking-[0.2em] uppercase mb-6 animate-pulse">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              Hi There,
              <br />
              I'm <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.7)]">Aryan</span>
              <br />
              <span className="text-gray-300">Full Stack Developer</span>
            </h1>

            <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8 max-w-2xl">
              I build clean, responsive, and modern web applications with strong problem-solving skills,
              creative design sense, and a focus on delivering real user value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/project"
                className="px-7 py-3 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border border-green-400/40 text-green-400 font-semibold hover:bg-green-400/10 hover:scale-105 transition duration-300"
              >
                Hire Me
              </a>
              
              <a
                href="/public/resume/Aryan_Resume.pdf"
                download
                className="px-7 py-3 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transition duration-300"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white/5 border border-green-400/10 rounded-2xl p-4 backdrop-blur-sm hover:border-green-400/40 transition duration-300">
                <h3 className="text-2xl font-bold text-green-400">10+</h3>
                <p className="text-gray-400 text-sm mt-1">Projects Built</p>
              </div>

              <div className="bg-white/5 border border-green-400/10 rounded-2xl p-4 backdrop-blur-sm hover:border-green-400/40 transition duration-300">
                <h3 className="text-2xl font-bold text-green-400">MERN</h3>
                <p className="text-gray-400 text-sm mt-1">Stack Focused</p>
              </div>

              <div className="bg-white/5 border border-green-400/10 rounded-2xl p-4 backdrop-blur-sm hover:border-green-400/40 transition duration-300 col-span-2 sm:col-span-1">
                <h3 className="text-2xl font-bold text-green-400">8.21</h3>
                <p className="text-gray-400 text-sm mt-1">CGPA</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end items-start md:-translate-y-12">
  <div className="absolute -top-6 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-green-400/20 blur-[110px] animate-pulse"></div>

  <div className="relative group -translate-y-6 md:-translate-y-14">
    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 blur-2xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

    <div className="relative w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] rounded-full p-[5px] bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_80px_rgba(74,222,128,0.45)] animate-[float_4s_ease-in-out_infinite]">
      <div className="w-full h-full rounded-full overflow-hidden bg-black">
        <img
          src="PortfolioImage2.jpeg"
          alt="Aryan"
          className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition duration-700"
        />
      </div>
    </div>

    <div className="absolute top-6 -left-8 bg-black/80 border border-green-400/20 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
      <p className="text-green-400 text-sm font-semibold">Frontend</p>
      <p className="text-gray-300 text-xs">React • Tailwind</p>
    </div>

    <div className="absolute bottom-10 -right-8 bg-black/80 border border-green-400/20 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
      <p className="text-green-400 text-sm font-semibold">Backend</p>
      <p className="text-gray-300 text-xs">Node • Express • MongoDB</p>
    </div>
  </div>
</div>



        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;