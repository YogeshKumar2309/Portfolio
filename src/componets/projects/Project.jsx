import React from "react";

const Project = ({ title, img, desc, link, id, technologies, features, status, duration, github }) => {
  return (
    <div className="bg-[#242e2215] border border-[#9de40f]/20 hover:border-[#9de40f]/40 transition-all duration-300 h-auto mx-1 lg:mx-5 my-5 lg:my-8 grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#9de40f]/20">
      
      {/* Image Section */}
      <div className="relative group">
        <img 
          src={img} 
          alt={title} 
          className="h-48 md:h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === 'Completed' 
              ? 'bg-green-500/80 text-white' 
              : status === 'In Progress'
              ? 'bg-yellow-500/80 text-black'
              : 'bg-gray-500/80 text-white'
          }`}>
            {status}
          </span>
        </div>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#9de40f]/80 text-black">
              {duration}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 lg:p-6 flex flex-col">
        
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-[#9de40f] font-extrabold uppercase text-lg lg:text-xl leading-tight">
            {title}
          </h3>
          <div className="w-12 h-0.5 bg-[#9de40f] mt-1"></div>
        </div>

        {/* Description */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-[#9de40f] text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 4).map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-[#9de40f1f] text-[#9de40f] text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Key Features */}
        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-[#9de40f] text-sm font-semibold mb-2">Key Features:</h4>
            <div className="text-gray-400 text-xs">
              {features.slice(0, 3).map((feature, index) => (
                <span key={index}>
                  • {feature}
                  {index < Math.min(features.length - 1, 2) && (
                    <br />
                  )}
                </span>
              ))}
              {features.length > 3 && <span className="text-gray-500"> & more...</span>}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2 flex-wrap">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 bg-[#9de40f] text-black rounded-lg hover:bg-[#7bb50a] transition-all duration-300 transform hover:scale-105"
            >
              <span>Live Demo</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm px-4 py-2 border border-[#9de40f] text-[#9de40f] rounded-lg hover:bg-[#9de40f] hover:text-black transition-all duration-300"
            >
              <span>GitHub</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;