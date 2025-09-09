import React, { useState } from "react";
import AboutSection from "../../componets/about/AboutSection"
import EducationSection from "../../componets/about/EducationSection"
import SkillsSection from "../../componets/about/SkillsSection"
import Button from "../../componets/common/ui/Button";



const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
       case 'skills':
        return <SkillsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
         <Button text='About Me'/>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Explore The Creativity & More
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-300 leading-relaxed text-md">
              Welcome to my digital space! I am <span className="text-lime-400 font-semibold">Yogesh Kumar</span>, a
              passionate MERN Stack Developer with a strong interest in creating
              modern, user-friendly, and efficient web applications. I'm always open
              to new opportunities, collaborations, and meaningful conversations.
              Whether you have a project idea or need a skilled developer, feel free
              to reach out.
            </p>
            <p className="text-md italic text-gray-400">
              Let's create something extraordinary together!
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;