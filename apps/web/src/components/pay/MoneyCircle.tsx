"use client";

import { motion } from "framer-motion";
import { HelpCircleIcon } from "lucide-react";

export default function MoneyCircle() {
  return (
    <motion.div
      className="w-10"
      animate={{ rotateY: 360, opacity: [1, 0.6, 1] }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.5,
        ease: "linear",
        times: [0, 0.5, 1],
      }}
    >
      <HelpCircleIcon name="help-circle" className="text-blue-500" size={40} />
    </motion.div>
  );
}
