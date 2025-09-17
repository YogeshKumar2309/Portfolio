import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./componets/common/layout/HomeLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Certificate from "./pages/certificate/Certificate";
import Resume from "./pages/resume/Resume";
import Contect from "./pages/contact/Contact";
import PageNotFound from "./pages/page-not-found/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contect />} />
        </Route>        
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
