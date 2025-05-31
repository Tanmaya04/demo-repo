import React from 'react';
import { motion } from 'framer-motion';
const LabReportSection = () => {
  const caseStudies = [
    { title: 'PRINTED DENIM WITH @nowrubi', link: '#', keyword: 'denim,printing,fashion' },
    { title: 'A CASE STUDY "JET SET"', link: '#', keyword: 'travel,fashion,collection,style' },
    { title: 'THE POWER OF DIGITAL SAMPLING', link: '#', keyword: 'digital,fashion,3dsampling,technology' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }
  };

  return (
    <motion.section
      id="lab-report"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h1>LabReport</h1>
      <h2>Explore Our Casestudies</h2>
      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <motion.article
            className="case-study-item"
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            <img
              src={`https://source.unsplash.com/featured/?${study.keyword}&w=400&h=250`}
              alt={study.title}
              style={{width: '100%', height: '250px', objectFit: 'cover', marginBottom: '15px'}}
            />
            <h3>{study.title}</h3>
            <a href={study.link} className="read-more-link">Read More</a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
export default LabReportSection;
