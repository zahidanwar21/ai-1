"use client";

import { FaChartLine, FaTools, FaLock } from 'react-icons/fa';
import { motion } from "framer-motion";

type FeaturesProps = unknown

const Features: React.FC<FeaturesProps> = () => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <FaChartLine size={60} className="mb-4 text-blue-500" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Real-time Data</h3>
            <p className="text-gray-700">
              Access live market data and make informed decisions instantly.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <FaTools size={60} className="mb-4 text-green-500" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Advanced Tools</h3>
            <p className="text-gray-700">
              Utilize sophisticated charting and analysis tools.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <FaLock size={60} className="mb-4 text-red-500" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Secure Trading</h3>
            <p className="text-gray-700">
              Trade with confidence knowing your assets are secure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
