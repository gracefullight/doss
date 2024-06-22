"use client";

import { motion } from "framer-motion";

export default function CoupangCircle() {
  return (
    <motion.svg
      width={200}
      height={200}
      initial={{ y: 20 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
    >
      <motion.circle cx={100} cy={100} r={80} fill="red" />
      <motion.text
        x={100}
        y={100}
        fill="white"
        fontFamily="Arial"
        fontSize="24"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        coupang
      </motion.text>
    </motion.svg>
  );
}
