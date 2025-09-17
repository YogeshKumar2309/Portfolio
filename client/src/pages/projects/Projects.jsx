import React from "react";
import Project from "../../componets/projects/Project";
import Layout from "../../componets/projects/Layout";
import yogeshAbout from "../../../public/images/yogeshAbout.jpg";

const projects = [
    {
    id: 3,
    title: "Diary",
    img: "/images/Diary.png",
    desc: "My Diary is a personal web application designed for users to securely record their thoughts and memories. Users must log in first to access the app. Once logged in, each user can write their own diary entries, which are kept completely private. On the home page, users can see an overview of their past entries and can seamlessly create new ones. The app ensures privacy, authentication, and real-time updates, making it easy to manage personal diaries safely and efficiently.",
    link: "https://diary-1v37.onrender.com/",
    technologies: [
      "express",
      "ejs",
      "mongoose",
      "node",
      "cookie-parser",
      "dotenv",
      "jsonwebtoken",
    ],
    features: [
      "Personal Diary",
      "View your diary",
      "Authentication",
      "Private",
      "Add colorful text and view in real-time",
    ],
    status: "Completed",
    duration: "12 Days",
    github: "https://github.com/YogeshKumar2309/Diary",
  },
  {
    id: 1,
    title: "E-Commerce MERN App",
    img: yogeshAbout,
    desc: "A comprehensive e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and responsive design. Includes admin dashboard for inventory management.",
    link: "https://frontend-o3z17lc50-yogesh-kumars-projects-b8b35247.vercel.app/",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API"],
    features: [
      "User Authentication",
      "Shopping Cart",
      "Payment Integration",
      "Admin Dashboard",
      "Order Tracking",
    ],
    status: "Completed",
    duration: "12 days",
    github: "https://github.com/yogesh/ecommerce-mern",
  },
  {
    id: 2,
    title: "Social Media MERN App",
    img: yogeshAbout,
    desc: "A full-featured social media application with real-time messaging, post creation, image uploads, user profiles, friend system, and news feed. Built with Socket.io for real-time communication and Cloudinary for image management.",
    link: "https://frontend-o3z17lc50-yogesh-kumars-projects-b8b35247.vercel.app/",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Cloudinary",
    ],
    features: [
      "Real-time Chat",
      "Post Creation",
      "Image Upload",
      "User Profiles",
      "Friend System",
      "News Feed",
    ],
    status: "In Progress",
    duration: "4 months",
    github: "https://github.com/yogesh/social-media-mern",
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
