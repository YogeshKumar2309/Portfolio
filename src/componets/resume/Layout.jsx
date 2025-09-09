import React from "react";
import Button from "../../componets/common/ui/Button";
import ColorButton from "../common/ui/ColorButton";




const Layout = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col items-center">
        {/* Buttons */}
        <div className="text-center my-5 flex gap-4">
          {/* View Resume Button */}
          <Button text="Resume" />

          {/* Download Resume Button */}
          <a
            href="/pdf/yogesh-resume.pdf" // Put your PDF in public/resume/
            download="Yogesh-Kumar-Resume.pdf"        
          >
           <ColorButton  text="Download Resume"  color = "lime"  />
          </a>
        </div>

        {/* Children (Resume Content) */}
        <div className="w-[80vw]">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
