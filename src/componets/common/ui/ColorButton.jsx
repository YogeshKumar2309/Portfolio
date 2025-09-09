import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const ColorButton = ({ text, color = "blue", icon: Icon }) => {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    purple: "bg-purple-600 hover:bg-purple-700 text-white",
    pink: "bg-pink-500 hover:bg-pink-600 text-white",
    lime: "bg-lime-500 hover:bg-lime-600 text-black",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide transition-all shadow-md ${colorClasses[color]}`}
    >
      <FaCloudDownloadAlt/>
      {text}
    </button>
  );
};

export default ColorButton;
