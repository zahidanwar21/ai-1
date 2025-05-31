// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaBitcoin,
//   FaEthereum,
//   FaYenSign,
//   FaDollarSign,
//   FaEuroSign,
//   FaRegClock,
//   FaMedal,
//   FaLifeRing,
//   FaSun,
//   FaWheelchair
// } from "react-icons/fa";

// const icons = [
//   { icon: <FaBitcoin />, label: "Bitcoin" },
//   { icon: <FaEthereum />, label: "Ethereum" },
//   { icon: <FaDollarSign />, label: "USD" },
//   { icon: <FaEuroSign />, label: "EUR" },
//   { icon: <FaYenSign />, label: "JPY" },
//   { icon: <FaMedal />, label: "Medal" },
//   { icon: <FaLifeRing />, label: "LifeRing" },
//   { icon: <FaRegClock />, label: "Clock" },
//   { icon: <FaSun />, label: "Sun" },
//   { icon: <FaWheelchair />, label: "Wheel" },
// ];

// const RotatingCircleIcons: React.FC = () => {
//   const radius = 150;

//   return (
//     <section className="py-20 bg-gray-900 text-gray-200">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-12">Supported Assets</h2>

//         <div className="relative w-[400px] h-[400px] mx-auto">
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//           >
//             <div className="relative w-full h-full">
//               {icons.map((item, index) => {
//                 const angle = (index / icons.length) * 2 * Math.PI;
//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;

//                 return (
//                   <motion.div
//                     key={index}
//                     className="absolute"
//                     style={{
//                       left: `calc(50% + ${x}px - 20px)`,
//                       top: `calc(50% + ${y}px - 20px)`
//                     }}
//                     whileHover={{ scale: 1.3 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-3xl bg-gray-800 p-3 rounded-full shadow-md">
//                       {item.icon}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Center circle */}
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
//             Trade
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RotatingCircleIcons;


"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaBitcoin,
  FaEthereum,
  FaYenSign,
  FaDollarSign,
  FaEuroSign,
  FaRegClock,
  FaMedal,
  FaLifeRing,
  FaSun,
  FaWheelchair
} from "react-icons/fa";

const icons = [
  { icon: <FaBitcoin />, label: "Bitcoin" },
  { icon: <FaEthereum />, label: "Ethereum" },
  { icon: <FaDollarSign />, label: "USD" },
  { icon: <FaEuroSign />, label: "EUR" },
  { icon: <FaYenSign />, label: "JPY" },
  { icon: <FaMedal />, label: "Medal" },
  { icon: <FaLifeRing />, label: "LifeRing" },
  { icon: <FaRegClock />, label: "Clock" },
  { icon: <FaSun />, label: "Sun" },
  { icon: <FaWheelchair />, label: "Wheel" },
];

const RotatingCircleIcons: React.FC = () => {
  const radius = 150;

  // Precompute positions once to avoid hydration mismatch
  const positions = useMemo(() => {
    return icons.map((_, index) => {
      const angle = (index / icons.length) * 2 * Math.PI;
      const x = parseFloat((Math.cos(angle) * radius).toFixed(3));
      const y = parseFloat((Math.sin(angle) * radius).toFixed(3));
      return { x, y };
    });
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Supported Assets</h2>

        <div className="relative w-[400px] h-[400px] mx-auto">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="relative w-full h-full">
              {icons.map((item, index) => {
                const { x, y } = positions[index];

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl bg-gray-800 p-3 rounded-full shadow-md">
                      {item.icon}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
            Trade
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingCircleIcons;
