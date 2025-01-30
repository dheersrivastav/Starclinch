'use client';
import { motion } from 'framer-motion';

export default function ScrollComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
    </motion.div>
  );
}