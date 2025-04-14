import React from "react";
import { User } from 'lucide-react';
import  Heading  from "./Heading";

const About = () => {
  return <div className="bg-pink-500">
     <Heading icon={<User/>} title="About Me"/>
  </div>;
};

export default About;
