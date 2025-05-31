import React from 'react';
import { motion } from 'framer-motion';
const AdvancedProductDevSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }, // Added slight delay
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  };

  return (
    <motion.section
      id="advanced-product-development"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h1>Advanced Product Development</h1>
      <motion.p initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:0.2, duration:0.5}}} viewport={{ once: true, amount: 0.1 }}>Our development services are built around full product creation from client brief to 3d samples, prototypes, and fabric development, connecting seamlessly with LabwearOS for sampling and bulk production.</motion.p>
      <motion.a href="#" className="cta-button"
        initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0, transition: {delay: 0.4, duration: 0.5}}}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Services</motion.a>

      <div className="additional-info">
        <motion.div className="info-block" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.3 }} whileHover="hover">
          <h2>Get an instant quote</h2>
          <motion.a href="#" className="cta-button-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Price Calculator</motion.a>
        </motion.div>
        <motion.div className="info-block" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.3 }} whileHover="hover">
          <h2>Labwear Factories in Portugal</h2>
          <motion.a href="#" className="cta-button-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>LEARN MORE</motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default AdvancedProductDevSection;
