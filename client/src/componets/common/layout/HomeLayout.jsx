import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="md:h-20 h-12">
        <Header />
      </div>
      <main >
        <Outlet />
      </main>
      <div className="mt-10">
        <Footer/>
      </div>
      </>
  );
};

export default HomeLayout;
