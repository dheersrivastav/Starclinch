"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const singersData = [
  {
    id: 1,
    name: "Arijit Singh",
    img: "/singer1.jpg",
    details: "A popular Indian playback singer known for soulful melodies.",
  },
  {
    id: 2,
    name: "Shreya Ghoshal",
    img: "/singer2.jpg",
    details: "An award-winning Indian singer known for versatility in vocals.",
  },
];

export default function SingerCard() {
  const [selectedSinger, setSelectedSinger] = useState(singersData[0]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-10">
      <motion.div
        className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-pink-500 shadow-lg cursor-pointer"
        onClick={() => setSelectedSinger(singersData[1 - singersData.indexOf(selectedSinger)])}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          key={selectedSinger.id}
          src={selectedSinger.img}
          alt={selectedSinger.name}
          className="object-cover w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="ml-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">{selectedSinger.name}</h1>
        <p className="mt-2 text-lg text-gray-300">{selectedSinger.details}</p>
        <motion.a
          href="#"
          className="inline-block mt-4 text-pink-400 hover:text-pink-600"
          whileHover={{ scale: 1.1 }}
        >
          Explore all categories →
        </motion.a>
      </motion.div>
    </div>
  );
}
