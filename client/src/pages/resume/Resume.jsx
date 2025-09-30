import React from "react";
import Layout from "../../componets/resume/Layout";

import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBirthdayCake, FaGlobe, FaUser,
  FaGithub, FaCode, FaDatabase, FaTools, FaGraduationCap, FaAward,
  FaHeart, FaMusic, FaLaptopCode, FaGamepad, FaYoutube, FaBookOpen
} from "react-icons/fa";

const Button = ({ text }) => (
  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    {text}
  </button>
);

const Resume = () => {
  const resumeData = {
    info: {
      name: "Yogesh Kumar",
      role: "MERN Stack Developer",
      email: "yogesh12lohaghat@gmail.com",
      phone: "+91 7818962299",
      address: "Lohaghat, Uttarakhand",
      dob: "01-Jan-2003",
      nationality: "Indian",
      gender: "Male",
      github: "YogeshKumar2309",
      insta: "YogeshWebDev",
    },
    projects: [
      {
        name: "Real-Time People Counting System in Restaurant",
        description:
          "IoT-based project using Arduino and sensors integrated with a MERN stack web dashboard to monitor real-time footfall.",
        link: "http://localhost:3000",
      },
    ],
    skills: {
      frontend: [
        "React.js",
        "Tailwind CSS",
        "daisyUI",
        "JavaScript (ES6)",
        "CSS3",
        "HTML5",
      ],
      backend: ["Node.js", "Express.js", "MongoDB", "SQL", "Mongoose"],
      tools: [
        "Git",
        "GitHub",
        "MongoDB Atlas",
        "VS Code",
        "Postman",
        "ThunderClient",
      ],
    },
    profile:
      "MERN Stack Developer with a diploma in IT, currently expanding skills in the full MERN stack. Passionate about building modern web applications and seeking full-stack development opportunities.",
    education: [
      {
        degree: "Diploma in Information Technology",
        institution: "Government Polytechnic Lohaghat",
        period: "2023 – 2025",
        location: "Lohaghat, India",
      },
      {
        degree: "12th (Intermediate)",
        institution: "Pandit Beni Ram Punetha Inter College, Lohaghat",
        period: "2020 – 2022",
        location: "Lohaghat, India",
      },
      {
        degree: "10th (Secondary School Certificate)",
        institution: "Government Inter College, Dovabhagu",
        period: "2014 – 2020",
      },
    ],
    interests: [
      { text: "Listening to music while working on React projects to stay focused and creative.", icon: <FaMusic /> },
      { text: "Passionate about coding, especially JavaScript and React.js", icon: <FaCode /> },
      { text: "Exploring new web technologies and frameworks", icon: <FaLaptopCode /> },
      { text: "Improving typing speed and accuracy on Monkey.com", icon: <FaGamepad /> },
      { text: "Listening to music for relaxation and motivation", icon: <FaHeart /> },
      { text: "I enjoy watching English story-based content on YouTube to improve my listening skills and learn new vocabulary.", icon: <FaYoutube /> },
    ],
    certificates: [
      {
        name: "Certificate of Industrial Training",
        description:
          "Completed 1 month industrial training on MERN stack basics and overview of full-stack web development.",
        link: "https://yogesh.in",
      },
      {
        name: "MERN Stack Course with Knowledge Gate",
        description:
          "Completed Node.js, Express.js, MongoDB, React.js, HTML, CSS, JavaScript training on MERN stack.",
        link: "https://yogesh.in",
      },
    ],
  };

  return (
    <Layout>
      <div className="bg-black text-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* LEFT SIDE */}
          <div className="lg:w-1/3 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-900 text-4xl font-bold">
                YK
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">{resumeData.info.name}</h1>
              <h2 className="text-lg font-medium text-gray-300">{resumeData.info.role}</h2>
            </div>

            {/* Contact Info */}
            <div className="mb-8 space-y-3 text-sm">
              <div className="flex items-center"><FaEnvelope className="mr-3 text-blue-400" />{resumeData.info.email}</div>
              <div className="flex items-center"><FaPhoneAlt className="mr-3 text-blue-400" />{resumeData.info.phone}</div>
              <div className="flex items-center"><FaMapMarkerAlt className="mr-3 text-blue-400" />{resumeData.info.address}</div>
              <div className="flex items-center"><FaBirthdayCake className="mr-3 text-blue-400" />{resumeData.info.dob}</div>
              <div className="flex items-center"><FaGlobe className="mr-3 text-blue-400" />{resumeData.info.nationality}</div>
              <div className="flex items-center"><FaUser className="mr-3 text-blue-400" />{resumeData.info.gender}</div>
              <div className="flex items-center"><FaGithub className="mr-3 text-blue-400" />{resumeData.info.github}</div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 pb-2 flex items-center text-white">
                <FaCode className="mr-2 text-blue-400" />Projects
              </h3>
              {resumeData.projects.map((p, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold text-blue-300">{p.name}</h4>
                  <p className="text-sm text-gray-300">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 pb-2 flex items-center text-white">
                <FaTools className="mr-2 text-yellow-400" />Skills
              </h3>
              <p className="text-sm"><b>Frontend:</b> {resumeData.skills.frontend.join(", ")}</p>
              <p className="text-sm"><b>Backend:</b> {resumeData.skills.backend.join(", ")}</p>
              <p className="text-sm"><b>Tools:</b> {resumeData.skills.tools.join(", ")}</p>
            </div>

            {/* Profile */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 pb-2 flex items-center text-white">
                <FaUser className="mr-2 text-purple-400" />Profile
              </h3>
              <p className="text-sm text-gray-300">{resumeData.profile}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-2/3 p-8 bg-gray-900">
            {/* Education */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-gray-500 mb-4 pb-2 flex items-center text-white">
                <FaGraduationCap className="mr-2 text-yellow-400" />Education
              </h2>
              {resumeData.education.map((edu, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-4 mb-4">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  {edu.location && <p className="text-sm text-gray-400">{edu.location}</p>}
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-gray-500 mb-4 pb-2 flex items-center text-white">
                <FaHeart className="mr-2 text-red-400" />Interests
              </h2>
              {resumeData.interests.map((int, i) => (
                <div key={i} className="flex items-start gap-2 mb-2">
                  <div className="text-blue-400">{int.icon}</div>
                  <p className="text-sm text-gray-300">{int.text}</p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-2xl font-bold border-b-2 border-gray-500 mb-4 pb-2 flex items-center text-white">
                <FaAward className="mr-2 text-green-400" />Certificates
              </h2>
              {resumeData.certificates.map((cert, i) => (
                <div key={i} className="bg-gray-800 p-3 rounded-lg border-l-4 border-green-500 mb-3">
                  <h3 className="font-bold text-white flex items-center">
                    <FaBookOpen className="mr-2 text-green-400" />{cert.name}
                  </h3>
                  <p className="text-sm text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
