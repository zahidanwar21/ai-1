/* eslint-disable react/jsx-key */
"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaUserFriends, FaSearchDollar, FaLaptopCode, FaCogs, FaRocket } from "react-icons/fa";

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const iconSize = 40;
  const icons = [
    <FaChartLine size={iconSize} />, 
    <FaUserFriends size={iconSize} />, 
    <FaSearchDollar size={iconSize} />, 
    <FaLaptopCode size={iconSize} />, 
    <FaCogs size={iconSize} />, 
    <FaRocket size={iconSize} />
  ];

  const radius = 120;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Unlock Your Trading Potential
          </h1>
          <p className="text-xl mb-10 opacity-90">
            Powerful tools, real-time data, and a community of traders to help
            you succeed.
          </p>
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-lg transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started For Free
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative w-80 h-80 mx-auto"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {icons.map((icon, index) => {
              const angle = (index / icons.length) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {icon}
                </motion.div>
              );
            })}
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold">Nishi</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
