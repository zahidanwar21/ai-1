"use client";

import { motion } from "framer-motion";
import { FaUser, FaUserPlus, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for logo
import Link from "next/link";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Navbar() {
  return (
    <motion.nav
      className="bg-gradient-to-r from-gray-900 to-black text-white py-4 shadow-xl border-b border-blue-800"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <FaChartLine className="mr-3 text-blue-400" size={32} /> {/* Icon added */}
          <Link href="/" className="hover:text-blue-300 transition duration-300">
            Trader
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-8 text-lg">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Contact
          </Link>
          <Link href="/modules" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Modules
          </Link>

          {/* Auth Buttons */}
          <div className="ml-6 pl-6 border-l border-gray-700 flex space-x-6 items-center">
            <Link
              href="/login"
              className="flex items-center text-white font-medium hover:text-blue-400 transition duration-300"
            >
              <FaUser className="mr-2" />
              Login
            </Link>
            <Link
              href="/signup"
              className="flex items-center text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <FaUserPlus className="mr-2" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
