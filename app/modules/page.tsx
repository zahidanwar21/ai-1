"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Chart3D = dynamic(() => import("@/components/Chart3D"), { ssr: false });

const ModulesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      
  
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Modules Page
        </motion.h1>

        <motion.p
          className="text-lg text-purple-300 mb-8 font-mono overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, delay: 1, ease: "linear" }}
        >
          Welcome to the Modules Page, where trading strategy meets clarity.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 font-mono overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, delay: 3.5, ease: "linear" }}
        >
          Price action trading is more than just candles — it’s the psychology of the market visualized. Let’s dive in.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-8 mt-12 text-blue-400 overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 7, ease: "linear" }}
        >
          The Importance of Trading Price Action
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Key Price Action Concepts</h3>
            <motion.p
              className="text-gray-300 leading-relaxed text-lg mb-8 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 9, ease: "linear" }}
            >
              Understanding the fundamental concepts of price action is crucial for any trader. These concepts form the building blocks for interpreting market behavior directly from the charts, without relying solely on lagging indicators.
            </motion.p>
            <ul className="space-y-8">
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4
                  className="text-xl font-bold mb-3 text-green-400 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 12, ease: "linear" }}
                >
                  Support and Resistance
                </motion.h4>
                <motion.p
                  className="text-gray-300 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 13.5, ease: "linear" }}
                >
                  Support and resistance levels are price zones where price tends to reverse. Identifying these key levels helps in predicting potential turning points in the market.
                </motion.p>
              </li>
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4
                  className="text-xl font-bold mb-3 text-red-400 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 15.5, ease: "linear" }}
                >
                  Trend Lines
                </motion.h4>
                <motion.p
                  className="text-gray-300 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 17, ease: "linear" }}
                >
                  Trend lines help visualize market direction and are essential for spotting breakouts and continuations of the current trend.
                </motion.p>
              </li>
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4
                  className="text-xl font-bold mb-3 text-yellow-400 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 19, ease: "linear" }}
                >
                  Candlestick Patterns
                </motion.h4>
                <motion.p
                  className="text-gray-300 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 20.5, ease: "linear" }}
                >
                  From Dojis to Engulfing patterns, candlestick formations reveal the sentiment and potential next moves in the market.
                </motion.p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Basic Price Action Trading Strategies</h3>
            <ul className="space-y-8">
              <motion.div
                className="h-[400px] w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 22.5 }}
              >
                <Chart3D />
              </motion.div>
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4 className="text-xl font-bold mb-3 text-orange-400 overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 24, ease: "linear" }}>Support and Resistance Bounce</motion.h4>
                <p className="text-gray-300">Trade the bounce, not the break. Classic yet effective strategy to spot reversals.</p>
              </li>
              <motion.div
                className="mt-8 h-[400px] w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <Chart3D />
              </motion.div>
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4 className="text-xl font-bold mb-3 text-teal-400 overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 26.5, ease: "linear" }}>Trend Line Breakout</motion.h4>
                <motion.p
                  className="text-gray-300 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 28, ease: "linear" }}
                >Wait for the break, then strike with confidence. High momentum entries.</motion.p>
              </li>
              <li className="p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
                <motion.h4 className="text-xl font-bold mb-3 text-indigo-400 overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 30, ease: "linear" }}>Candlestick Confirmation</motion.h4>
                <motion.p
                  className="text-gray-300 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 31.5, ease: "linear" }}
                >Engulfing? Hammer? Combine with support/resistance to validate entries.</motion.p>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Default dark theme candlestick chart */}
{/* <TradingViewChart data={yourData} /> */}

{/* Light theme line chart */}

    </div>
  );
};

export default ModulesPage;