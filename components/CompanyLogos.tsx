"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CompanyLogos = () => {
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={logoVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Trusted by leading traders and institutions
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
          {/* Replace with actual company logos */}
          <Image
            src="https://images.unsplash.com/photo-1743385779566-25a21fe21e39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dsplash"
            alt="Company Logo 1"
            width={120}
            height={40}
          />
          <Image
            src="https://images.unsplash.com/photo-1743385779566-25a21fe21e39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dsplash"
            alt="Company Logo 2"
            width={120}
            height={40}
          />
          {/* Add more company logos with local image paths */}
          {/* Example: <Image src="/logo-3.jpg" alt="Company Logo" width={120} height={40} /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyLogos;