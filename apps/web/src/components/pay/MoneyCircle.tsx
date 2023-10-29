import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function MoneyCircle() {
  return (
    <motion.div
      className="w-10"
      animate={{ rotateY: 360, opacity: [1, 0.6, 1] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "linear",
        times: [0, 0.5, 1],
      }}
    >
      <QuestionMarkCircleIcon className="fill-info" />
    </motion.div>
  );
}
