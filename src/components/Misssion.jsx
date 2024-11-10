// src/components/Mission.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Mission() {
  // References for text and image containers to observe scroll into view
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-black text-white overflow-hidden">
      {/* Text Section with Scroll Animation */}
      <motion.div
        ref={textRef}
        initial={{ x: '-100%', opacity: 0 }}
        animate={textInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="md:w-1/2 px-8 text-center md:text-left z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">Our mission</h2>
        <p className="text-lg md:text-xl">
          We’re committed to delivering future-ready and technology-enabled services all across the globe to transform businesses and communities.
        </p>
      </motion.div>

      {/* Image Section with Scroll Animation */}
      <motion.div
        ref={imageRef}
        initial={{ x: '100%', opacity: 0 }}
        animate={imageInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="md:w-1/2 px-8 flex justify-center items-center z-10"
      >
        <img
          src="https://www.systemsltd.com/sites/default/files/2023-07/MicrosoftTeams-image%20%28131%29.webp"
          alt="About Us"
          className="rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        />
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-orange-600 opacity-20"></div>
    </section>
  );
}

export default Mission;
  