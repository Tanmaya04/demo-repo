import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ManufacturingServiceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
  };

  return (
    <motion.section
      id="manufacturing-as-a-service"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      // Applied Tailwind classes for section padding and background
      className="py-16 sm:py-20 md:py-24 bg-slate-50"
    >
      {/* Applied Tailwind classes for responsive text size, weight, color, and spacing */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
        Manufacturing as a Service
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-700 mb-10">
        LWS Factory Network
      </h2>
      <motion.p
        initial={{ opacity:0 }}
        whileInView={{ opacity:1, transition: {delay: 0.3, duration: 0.5}}}
        viewport={{ once: true, amount: 0.1 }}
        // Applied Tailwind classes for text alignment, max-width, margin, color, and responsive text size
        className="text-center max-w-3xl mx-auto text-slate-600 mb-12 text-base md:text-lg leading-relaxed"
      >
        The LWS Network is our integrated network of 16+ specialized manufacturers. Each of the manufacturers bring key capabilities to the network, from flat-knitting, to circular-knitting, CMT, printing technologies, or dying techniques, all accessible through a single platform. Each garment gets quality checked by the manufacturer according to our guidelines and sent directly to you.
      </motion.p>

      <motion.div
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0, transition: {delay: 0.5, duration: 0.5}}}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center" // Utility class to center the button
      >
        <Button
          variant="default"  // Uses primary color defined by Shadcn CSS variables
          size="lg"      // Uses large size defined in buttonVariants
          // Applied Tailwind classes for additional styling to the Shadcn Button
          className="font-semibold px-8 py-3 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => console.log('Capabilities button clicked')}
        >
          Explore Capabilities
        </Button>
      </motion.div>
    </motion.section>
  );
};
export default ManufacturingServiceSection;
