import React from "react";
import Project from "../../componets/projects/Project";
import Layout from "../../componets/projects/Layout";
import yogeshAbout from "../../../public/images/yogeshAbout.jpg";
import { PiOrange } from "react-icons/pi";

const projects = [
  {
    id: 1,
    title: "E-Commerce MERN App",
    img: yogeshAbout,
    desc: "A comprehensive e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and responsive design. Includes admin dashboard for inventory management.",
    link: 'https://frontend-o3z17lc50-yogesh-kumars-projects-b8b35247.vercel.app/',
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API"],
    features: ["User Authentication", "Shopping Cart", "Payment Integration", "Admin Dashboard", "Order Tracking"],
    status: "Completed",
    duration: "12 days",
    github: "https://github.com/yogesh/ecommerce-mern"
  },
  {
    id: 2,
    title: "Social Media MERN App",
    img: yogeshAbout,
    desc: "A full-featured social media application with real-time messaging, post creation, image uploads, user profiles, friend system, and news feed. Built with Socket.io for real-time communication and Cloudinary for image management.",
    link: 'https://frontend-o3z17lc50-yogesh-kumars-projects-b8b35247.vercel.app/',
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Cloudinary"],
    features: ["Real-time Chat", "Post Creation", "Image Upload", "User Profiles", "Friend System", "News Feed"],
    status: "Completed",
    duration: "4 months",
    github: "https://github.com/yogesh/social-media-mern"
  },
  {
    id: 3,
    title: "Task Management MERN App",
    img: yogeshAbout,
    desc: "A collaborative task management system with project organization, team collaboration, deadline tracking, file attachments, and progress monitoring. Features drag-and-drop interface, notifications, and detailed analytics dashboard.",
    link: 'https://frontend-o3z17lc50-yogesh-kumars-projects-b8b35247.vercel.app/',
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Multer"],
    features: ["Project Management", "Team Collaboration", "File Upload", "Deadline Tracking", "Analytics", "Notifications"],
    status: "In Progress",
    duration: "2 months",
    github: "https://github.com/yogesh/task-management-mern"
  },
];

const Projects = () => {
  return (
    <>
      <Layout>
        {projects.map((project, idx) => (
          <Project
            key={project.id} // Better to use project.id instead of idx
            title={project.title}
            img={project.img}
            desc={project.desc}
            link={project.link}
            id={project.id}
            technologies={project.technologies}
            features={project.features}
            status={project.status}
            duration={project.duration}
            github={project.github}
          />
        ))}
      </Layout>
    </>
  );
};

export default Projects;