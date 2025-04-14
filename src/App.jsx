import React from "react";
import Header from "./componets/Header";
import Container from "./componets/Container";
import About from "./componets/About";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Education from "./componets/Education";
import Hobbies from "./componets/Hobbies";
import Activities from "./componets/Activities";
import Contact from "./componets/Contact";  


const App = () => {
  return (
    <>
      <Container>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Activities />
        <Contact />
      </Container>
      {/* working the project branch */}
    </>
  );
};

export default App;
