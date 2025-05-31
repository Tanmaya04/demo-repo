import React from 'react';
import { motion } from 'framer-motion';
const WhatWeDoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.section
      id="what-we-do"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h1>What we do</h1>
      <p>We’re democratizing fashion manufacturing - providing ready-to-order blanks, advanced product development, and on-demand manufacturing at the touch of a button.</p>
      <div className="sub-sections-container">
        <motion.article className="sub-section" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} whileHover="hover">
          <img src="https://source.unsplash.com/featured/?fashion,blanks,tshirt&w=300&h=200" alt="Wholesale Blanks" style={{width: "100%", height: "200px", objectFit: "cover", marginBottom: "15px", borderRadius: "5px"}} />
          <h2>Wholesale Blanks</h2>
          <p>High-quality blanks. No MOQs. Shipped within 3 days.</p>
        </motion.article>
        <motion.article className="sub-section" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} whileHover="hover">
          <img src="https://source.unsplash.com/featured/?fashion,manufacturing,factory&w=300&h=200" alt="Manufacturing-as-a-Service" style={{width: "100%", height: "200px", objectFit: "cover", marginBottom: "15px", borderRadius: "5px"}} />
          <h2>Manufacturing-as-a-Service</h2>
          <p>A digital manufacturing platform to access our integrated supply chains and produce fully custom garments.</p>
        </motion.article>
        <motion.article className="sub-section" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} whileHover="hover">
          <img src="https://source.unsplash.com/featured/?fashion,design,3dmodeling&w=300&h=200" alt="Development Services" style={{width: "100%", height: "200px", objectFit: "cover", marginBottom: "15px", borderRadius: "5px"}} />
          <h2>Development Services</h2>
          <p>Built around full product creation from client brief to 3d samples, prototypes, and fabric development.</p>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default WhatWeDoSection;
