import React from "react";
import { TypeAnimation } from "react-type-animation";
import arrow from "../../../public/logo/arrow.png";
import yogesh from "../../../public/images/yogesh.png";

const SectionOne = () => {
  return (
    <div className="flex">
      <div className="left flex-1 flex flex-col items-center w-1/2 lg:mt-8">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <div className="lg:hidden w-32 h-32  rounded-full my-4 overflow-hidden flex items-center justify-center">
              <img
                src={yogesh}
                alt="Profile"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <TypeAnimation
              className="text-2xl lg:text-[28px]"
              sequence={["Hi 👋", 1000, "I am Yogesh Kumar", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col lg:ms-35 ">
            <div className="flex relative">
              <div className="text-4xl lg:text-[42px]  mt-6  font-bold ">
                <p className="text-[#9de40f] ">A Creative</p>
                <p className="font-bold text-outline">MERN Stack Developer</p>
              </div>

              <div className="w-16  h-16 absolute top-10 left-93 lg:w-20 lg:h-20 lg:left-109 lg:top-8">
                <img
                  src={arrow}
                  alt=""
                  className="w-full h-full  object-contain "
                />
              </div>
            </div>

            <div className="w-[80vw] lg:w-full mt-2">
              MERN stack developers leverage modern frameworks and powerful
              technologies to craft dynamic, scalable, and user-friendly web
              applications.
            </div>
          </div>
        </div>
      </div>

      <div className="right flex-1 hidden lg:block w-1/2 ">
        <div className=" w-63 h-63  rounded-full my-4 overflow-hidden flex  justify-center ms-50">
        <img
          src={yogesh}
          alt="Profile"
          className="max-w-full max-h-full object-contain"
        /></div>
      </div>
    </div>
  );
};

export default SectionOne;
