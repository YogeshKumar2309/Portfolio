import React from "react";

const Header = () => {
  return (
    <>
      <div className=" border-2 border-blue-500 rounded-t-2xl bg-blue-600  flex justify-between p-5 mt-24 text-white ">
        <span>
 
          <h1 className="font-bold text-3xl">Yogesh Kumar</h1>
          <h2>Frontend Developer</h2>
        </span>
        <span className="rounded  ">
     
          <img
            className="w-24 rounded-full "
            src="../public/images/yogesh.jpg"
            alt="ProfileHolderImage"
          />
        </span>
      </div>
    </>
  );
};

export default Header;
