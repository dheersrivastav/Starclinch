'use client';
import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}