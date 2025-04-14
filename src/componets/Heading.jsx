import React from "react";

const Heading = ({icon,title}) => {
  return (
    <>
      <span className="flex items-center px-5 py-4 font-bold text-lg">{icon}
        <span className="px-1">{title} </span>
      </span>
      
    </>
  );
};

export default Heading;
