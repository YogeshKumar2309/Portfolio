// Certificate.jsx (Main page)
import React from "react";
import Layout from "../../componets/certificats/Layout";
import CertificateTemp from "../../componets/certificats/Certificate";

const certificates = [
  {
    id: 1,
    name: "MERN Stack Developer",
    pdf: "/pdf/Mern_stack.pdf",
    issueDate: "June 2025",
    description: "Completed a full MERN stack course with practical projects.",
  },
  {
    id: 2,
    name: "Full Stack Developer",
    pdf: "/pdf/Mern_stack.pdf",
    issueDate: "July 2025",
    description:
      "Advanced full-stack development certification with React & Node.js.",
  },
];

const Certificate = () => {
  return (
    <>
      <Layout>
        {certificates.map((Certificate) => (
          <CertificateTemp
            key={Certificate.id}
            name={Certificate.name}
            pdf={Certificate.pdf}
            issueDate={Certificate.issueDate}
            description={Certificate.description}
          />
        ))}
      </Layout>
    </>
  );
};

export default Certificate;
