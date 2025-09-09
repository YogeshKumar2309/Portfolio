


// CertificateTemp.jsx (Certificate card component)
import React from "react";

const CertificateTemp = ({ pdf, name, issueDate, description }) => {
  return (
    <div className="my-5 w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Certificate iframe preview - styled like an image */}
      <div className="relative w-full h-64 sm:h-72 bg-gray-50 border-b">
        <iframe
          src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrolling=no`}
          width="100%"
          height="100%"
          style={{ 
            border: "none",
            pointerEvents: "none", // Disable iframe interactions
            overflow: "hidden"
          }}
          title={name}
          scrolling="no"
        />
        {/* Overlay to prevent iframe interactions and make it more image-like */}
        <div 
          className="absolute inset-0 bg-transparent hover:bg-opacity-5 transition-all duration-200"
          onClick={() => window.open(pdf, "_blank")}
        />
      </div>

      {/* Certificate info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        {issueDate && (
          <p className="text-sm font-medium text-blue-600 mb-2">
            Issued: {issueDate}
          </p>
        )}
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}
        
        {/* View certificate button */}
        <button
          onClick={() => window.open(pdf, "_blank")}
          className="mt-4 w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateTemp;