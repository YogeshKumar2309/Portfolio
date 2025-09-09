import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
        {/* Brand/About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
            YogeshWebDev
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-sm leading-relaxed">
            Building responsive and modern web applications with MERN Stack.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-gray-200">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-lime-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-lime-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-lime-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-lime-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-gray-200">Follow Me</h3>
          <div className="flex space-x-6 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-600 text-xs mt-16 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Yogesh Kumar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;