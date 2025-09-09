import React from "react";
import Button from "../../componets/common/ui/Button";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col items-center ">
        <div className="text-center my-5 ">
          <Button text="CONTECT me" />
        </div>
        <div className="w-[80vw]">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
