import React from 'react';
import { motion } from 'framer-motion';
const HowToGetStartedSection = () => {
  const steps = [
    { title: 'Start your Project', description: 'Discover our manufacturing capabilities, previous projects, and FAQs to learn about the manufacturing process and full range of product options.' },
    { title: 'Register on LabwearOS', description: 'Sign up for free – it only takes 2 minutes! This gives you access to our platform where you can explore features, manage orders, and track your project.' },
    { title: 'Configure your Tech Pack in LabwearOS', description: 'Select your custom measurements, fabrics, colors, labels, and use Illustrator for embellishment, including reference images for finishings. Before uploading, double-check for accuracy and completeness.' },
    { title: 'Submit your Design(s)', description: 'Once your Digital Tech Pack is complete, submit your Design through LabwearOS to receive quotation and initiate production.' },
    { title: 'Access Assistance', description: 'Our experts support you in optimizing your project, finding solutions across our network of factories, and product development. Use the built-in chat or book a call any time.' },
    { title: 'Sampling', description: 'Before production starts, you can request either 3D sample or physical samples for final approval of materials, construction, fit, color, or embellishment.' },
    { title: 'Bulk Production', description: 'Once the sample is approved, bulk production starts. You can track the progress in real-time and stay updated at every stage of the process.' },
    { title: 'Quality Control & Shipping', description: 'Each garment gets quality checked by the manufacturer according to our guidelines and sent directly to you.' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({ // Custom function to allow staggered delay
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15, // Stagger delay by 0.15s for each item
        duration: 0.4
      }
    })
  };

  return (
    <motion.section
      id="how-to-get-started"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of section is visible for earlier animation
      variants={sectionVariants}
    >
      <h1>How to get started</h1>
      <ol>
        {steps.map((step, index) => (
          <motion.li
            key={index}
            custom={index} // Pass index to variants for staggering
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
};
export default HowToGetStartedSection;
