import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  // Width of the scrolling area in pixels (adjust if needed)
  // You can also calculate dynamically with refs but let's keep it simple here.
  const scrollWidth = 1200; 

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          What Our Users Say
        </h2>

        {/* Motion wrapper for linear horizontal scroll */}
        <motion.div
          className="flex gap-8"
          style={{ width: 'max-content' }}
          animate={{ x: [-scrollWidth, 0] }}   // Moves from left (hidden) to original pos
          transition={{
            duration: 20,          // adjust speed (seconds)
            ease: "linear",        // constant speed
            repeat: Infinity,      // loop forever
            repeatType: "loop",
          }}
        >
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-500 border-opacity-30 min-w-[350px]">
            <p className="text-lg italic mb-4">
              &quot;This platform has revolutionized my trading. The real-time data and tools are incredible&quot;
            </p>
            <p className="text-right font-semibold text-blue-400">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-500 border-opacity-30 min-w-[350px]">
            <p className="text-lg italic mb-4">
              &quot;I&apos;ve tried many trading platforms, but this one is by far the most user-friendly and effective.&quot;
            </p>
            <p className="text-right font-semibold text-purple-400">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-500 border-opacity-30 min-w-[350px]">
            <p className="text-lg italic mb-4">
              &quot;The community aspect is a huge plus. Learning from other traders has been invaluable.&quot;
            </p>
            <p className="text-right font-semibold text-blue-400">- Peter Jones</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
