import React from "react";
import mern_certificate from "../../../public/pdf/Mern_stack.pdf";
import mern_resume from "../../../public/pdf/yogesh-resume.pdf";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import SectionOne from "../../componets/home/SectionOne";

const Home = () => {
  return (
    <>
      <SectionOne/>

      <div className="text-center flex justify-center mt-10 md:my-20">
        <div className="w-[90vw] flex flex-wrap justify-around gap-4 border rounded-md py-4 px-6 border-[#9de40f] bg-[#171815]">
          <a
            href="https://github.com/YogeshKumar2309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-18 h-18 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 cursor-pointer">
              <FaGithub size={24} />
              <span className="text-xs mt-1">GitHub</span>
            </div>
          </a>

          <a href={mern_resume} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center w-18 h-18 bg-gray-800 text-white rounded-full hover:bg-green-500 transition-colors duration-300 cursor-pointer">
              <BsFillFileEarmarkTextFill size={24} />
              <span className="text-xs mt-1">Resume</span>
            </div>
          </a>

          <a
            href="https://instagram.com/yogeshwebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-18 h-18 bg-gray-800 text-white rounded-full hover:bg-pink-500 transition-colors duration-300 cursor-pointer">
              <FaInstagram size={24} />
              <span className="text-xs mt-1">Instagram</span>
            </div>
          </a>

          <a href={mern_certificate} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center w-18 h-18 bg-gray-800 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
              <AiFillSafetyCertificate size={24} />
              <span className="text-xs mt-1">Certificates</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
