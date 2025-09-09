import React from "react";
import Button from "../../componets/common/ui/Button";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="text-center my-5 mx-7 lg:mx-8 ">
        <Button text="Projects" />

        <div className="grid lg:grid-cols-2">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
