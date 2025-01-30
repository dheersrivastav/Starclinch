// Footer.js
import { motion } from "framer-motion";

export default function Footer() {
  const bottomTags = [
    "Focused",
    "Collaborative",
    "United",
    "Vibrant",
    "Dynamic",
    "Motivated",
  ];

  return (
    <div className="relative flex items-center justify-center bg-black text-white px-4 py-10 md:px-6">
      {/* Outer Circle Effects */}
      <div className="absolute w-[300px] h-[300px] bg-pink-700 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-purple-700 opacity-30 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-6xl w-full text-center p-8 md:p-20 rounded-[50px] md:rounded-[2000px] bg-gradient-to-r from-[#1a0b1d] to-[#120b17] shadow-lg overflow-hidden border border-gray-700">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block md:absolute md:top-[40px] md:left-[230px] text-pink-400 px-3 py-1 rounded-full text-sm font-semibold"
        >
          We are the team of
        </motion.p>

        {/* Overlapping Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute top-[120px] left-[230px] bg-gray-800 px-3 py-1 rounded-full text-sm shadow-lg rotate-[-20deg] hidden md:block"
        >
          Fun
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-[100px] right-[180px] bg-gray-800 px-3 py-1 rounded-full text-sm shadow-lg rotate-[15deg] hidden md:block"
        >
          Inclusive
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold">
          20+ <span className="text-gray-300">Talented Folks</span>
        </h1>

        <p className="text-gray-400 mt-3 text-base md:text-lg px-4 md:px-12">
          From passion-driven dedication to impactful contribution, we do it all here.
          We are growing and will be excited to hear from you!
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 mb-12 relative"
        >
          <button 
            className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
            onMouseEnter={() => document.getElementById('bottomTags').classList.add('scale-110')}
            onMouseLeave={() => document.getElementById('bottomTags').classList.remove('scale-110')}
          >
            Join our team →
          </button>
        </motion.div>

        {/* Overlapping Bottom Floating Tags */}
        <div id="bottomTags" className="relative flex flex-wrap justify-center gap-2 -mt-2 transition-transform duration-300">
          {bottomTags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? 25 : -25 }}
              animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 25 : -25 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-gray-800 px-5 py-2 rounded-full text-sm text-gray-300 shadow-lg hover:bg-gray-700 transition-colors cursor-default"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}