import React from "react";

const education = [
  {
    degree: "Diploma in Information Technology",
    institution: "Government Polytechnic Lohaghat (Uttarakhand)",
    year: "2023 - 2025",
    description:
      "Studied core IT subjects like Computer Fundamentals, C Programming, DBMS, Networking, and Web Technologies. This strong foundation motivated me to explore MERN Stack development.",
  },
  {
    degree: "Senior Secondary Education (Science)",
    institution: "Beni Ram Punetha Govt. Inter College Lohaghat",
    year: "2020 - 2022",
    description:
      "Focused on Mathematics, Physics, and Chemistry, which helped build analytical and problem-solving skills.",
  },
  {
    degree: "Secondary Education",
    institution: "Govt. Inter College Dovabhagu",
    year: "2014 - 2020",
    description:
      "Completed foundational education with Mathematics and Science, sparking my interest in technology.",
  },
];

const EducationSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
        My <span className="text-lime-400">Education</span> Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Trunk */}
        <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-green-600 via-lime-500 to-green-800 h-full rounded-full z-0 hidden md:block"></div>

        {/* Education Cards */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center mb-12 last:mb-0"
            >
              {/* Card */}
              <div
                className={`w-full md:w-1/2 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700 hover:border-lime-400 transition duration-300 bg-gray-800 ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <span className="bg-lime-400 text-black px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-lime-400 text-sm sm:text-base mb-2">
                  {edu.institution}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-lime-400 border-2 border-gray-900 shadow-lg md:static md:mx-0 md:mt-0 md:ml-0 z-10"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
