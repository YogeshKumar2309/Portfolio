import React from "react";

const Container = ({children}) => {
  return (
    <div className=" bg-amber-100 p-3 flex flex-col items-center ">
      <div className="w-full h-screen">{children}</div>
      </div>
  );
};

export default Container;
