// Layout.jsx (Layout component)
import React from "react";
import Button from "../../componets/common/ui/Button";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="text-center my-5">
          <Button text="my certificate" />
        </div>
        <div className="flex gap-6 justify-center flex-wrap  mx-auto px-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;