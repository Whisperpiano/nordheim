import { AnimatePresence, motion } from "framer-motion";
import { fallbackVariants } from "./FadingFallback.variants";

export default function FadingFallback() {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        variants={fallbackVariants}
        initial="visible"
        animate="visible"
        exit="exit"
        className="absolute inset-0 flex items-center justify-center bg-white"
      >
        Loading...
      </motion.div>
    </AnimatePresence>
  );
}
