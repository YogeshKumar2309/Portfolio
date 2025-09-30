// Certificate.jsx (Main page)
import React from "react";
import Layout from "../../componets/certificats/Layout";
import CertificateTemp from "../../componets/certificats/Certificate";

const certificates = [
  {
    id: 1,
    name: "MERN Stack Developer",
    pdf: "/pdf/Mern_stack.pdf",
    issueDate: "August 2025",
    description: "Completed a full MERN stack course with practical projects.",
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
