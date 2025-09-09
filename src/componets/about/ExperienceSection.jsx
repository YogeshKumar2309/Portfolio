// import React from 'react'

// // Experience Component
// const ExperienceSection = () => {
//   const experiences = [
//     {
//       position: "Senior MERN Stack Developer",
//       company: "TechCorp Solutions",
//       year: "2022 - Present",
//       description: "Leading development of complex web applications using MongoDB, Express.js, React, and Node.js. Mentoring junior developers and architecting scalable solutions."
//     },
//     {
//       position: "Full Stack Developer",
//       company: "WebDev Agency",
//       year: "2020 - 2022",
//       description: "Developed responsive websites and web applications for various clients. Specialized in React.js front-end development and Node.js backend solutions."
//     },
//     {
//       position: "Junior Web Developer",
//       company: "StartupHub",
//       year: "2019 - 2020",
//       description: "Built user interfaces and assisted in backend development projects. Gained experience in modern JavaScript frameworks and database management."
//     },
//     {
//       position: "Web Development Intern",
//       company: "Digital Solutions Inc.",
//       year: "2018 - 2019",
//       description: "Started career journey with hands-on experience in HTML, CSS, JavaScript. Contributed to various client projects and learned industry best practices."
//     }
//   ];

//   return (
//     <div className="mb-16">
//       <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h3>
//       <div className="space-y-8">
//         {experiences.map((exp, index) => (
//           <div key={index} className="relative">
//             <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/30 transition-all duration-300">
//               <div className="flex justify-between items-start mb-4">
//                 <h4 className="text-xl font-semibold text-white">{exp.position}</h4>
//                 <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-medium">{exp.year}</span>
//               </div>
//               <h5 className="text-lime-400 text-lg mb-4 font-medium">{exp.company}</h5>
//               <p className="text-gray-300 leading-relaxed">{exp.description}</p>
//             </div>
//             {index < experiences.length - 1 && (
//               <div className="w-0.5 h-8 bg-lime-400 mx-auto mt-4"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection