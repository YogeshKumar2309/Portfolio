import React from 'react';
// About Component
const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16 px-6 lg:px-20">
      {/* Left: Image */}
      <div className="flex justify-center lg:justify-start lg:w-1/2">
        <img
          src="/images/yk.png"
          alt="Yogesh Kumar"
          className="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl"
        />
      </div>

      {/* Right: Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-white mb-6">
          My Learning Journey
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          I started learning React during my industrial training in college, but at
          that time I struggled to fully understand the concepts. In my 5th semester,
          I decided to focus on Android and Java programming, so I paused my MERN journey
          and spent time building basic Android apps.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          When it came time for my minor project, I decided to create a chat application
          using the MERN stack. I followed YouTube tutorials, but most of the code was
          difficult to understand, and I faced a lot of errors. With the help of ChatGPT
          and continuous debugging, I successfully completed that project.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          Realizing that Android development wasn’t my strength, I shifted my focus back
          to MERN stack. After exams, I started revisiting HTML, CSS, and JavaScript
          fundamentals, and then moved on to React. College classes were focused mainly
          on outdated courses and exam preparation, so I dedicated my own time to self-learning.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          I invested in a Knowledge Gate MERN course and built multiple projects,
          including my major project using MERN and ChatGPT’s help. At one point,
          I even explored Python and Django, but I ultimately decided to master MERN
          stack development because I had already built a strong foundation.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          Today, my journey reflects self-motivation, resilience, and continuous learning.
          Every struggle taught me how to learn independently, solve real-world problems,
          and become a better developer.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Email</h4>
            <p className="text-white text-lg">yogesh12lohaghat@gmail.com</p>
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Phone</h4>
            <p className="text-white text-lg">+91 781 189 622 99</p>
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Address</h4>
            <p className="text-white text-lg">Lohaghat, Uttarakhand</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
