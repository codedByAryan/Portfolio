import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-green-500/20 mt-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_45%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-green-400 tracking-wide">Software Developer</h2>
            <p className="text-gray-400 mt-4 leading-7 max-w-sm">
              Building modern digital experiences with clean design, strong logic, and a futuristic web presence.
            </p>
          </div>

            <div>
  <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>

  <div className="flex gap-12">
    
    {/* Left Side (4 links) */}
    <div className="flex flex-col gap-3 text-gray-400">
      <a href="/" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Home
      </a>
      <a href="/about" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        About
      </a>
      <a href="/project" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Projects
      </a>
      <a href="/skill" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Skills
      </a>
    </div>

    {/* Right Side (3 links) */}
    <div className="flex flex-col gap-3 text-gray-400">
      <a href="/contact" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Contact
      </a>
      <a href="/experiance" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Experience
      </a>
      <a href="/certificate" className="hover:text-[#22c55e] transition-all duration-300 hover:translate-x-1">
        Certificates
      </a>
    </div>

  </div>
</div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">Connect</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://github.com/codedByAryan"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/aryan-chauhan-989862272/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="mailto:aryanchauhan9424@gmail.com"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <div className="flex items-center gap-4 flex-wrap mt-5">
                <a
                href="https://leetcode.com/u/geekyaryan/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <SiLeetcode size={18} />
              </a>

                <a
                href="https://www.geeksforgeeks.org/profile/aryan23scsc1tj"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-green-400/30 text-gray-300 flex items-center justify-center hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.45)] transition duration-300"
              >
                <SiGeeksforgeeks size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Aryan. All rights reserved.
          </p>

          <a
            href="#top"
            className="w-10 h-10 rounded-full bg-green-400 text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] transition duration-300"
          >
            <FaArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;