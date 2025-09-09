import React from 'react'

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React.js", level: 80 },
    { name: "JavaScript (ES6+)", level: 75 },
    { name: "HTML5 & CSS3", level: 85 },
    { name: "Tailwind CSS", level: 65 },
    { name: "Responsive Web Design", level: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB Atlas", level: 50 },
    { name: "MySQL", level: 45 },
    { name: "REST API Development", level: 65 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 75 },
    { name: "Figma (Basics)", level: 30 },
  ];

  const otherSkills = [
    { name: "C (Basics)", level: 60 },
    { name: "C++ (Basics)", level: 45 },
    { name: "Java (Basics)", level: 45 },
    { name: "Python (Basics)", level: 65 },
    { name: "PHP (Basics)", level: 50 },
    { name: "Arduino/IoT Projects", level: 65 },
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
      <h4 className="text-xl font-bold text-white mb-6 text-center">{title}</h4>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-lime-400 text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-lime-400 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Backend" skills={backendSkills} />
        <SkillCard title="Tools" skills={tools} />
        <SkillCard title="Other Skills" skills={otherSkills} />
      </div>
    </div>
  );
};

export default SkillsSection;
