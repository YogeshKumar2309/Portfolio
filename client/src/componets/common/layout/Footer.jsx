import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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
              <Link
                to="/"
                className="hover:text-lime-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-lime-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-lime-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-lime-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-gray-200">Follow Me</h3>
          <div className="flex mt-4">
          {/* GitHub */}
            <Link
              to="https://github.com/YogeshKumar2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors mr-6"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors mr-6"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </Link>

            {/* Instagram */}
            <Link
              to="https://instagram.com/yogeshwebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors mr-6"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </Link>
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