// src/components/Hero.jsx
//import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/be/4a/ea/be4aeabbd923e4b167d1212cd06ece30.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Welcome to Our Company</h1>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 flex space-x-4 mt-10"
      >
        <button className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2">
          Learn More
        </button>
        <button className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2">
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
