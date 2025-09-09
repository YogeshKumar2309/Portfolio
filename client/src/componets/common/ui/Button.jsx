import React from "react";

const Button = ({ text }) => {
  return (
    <div className="inline-block border-1 border-lime-400  px-6 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wide">
      {text}
    </div>
  );
};

export default Button;
