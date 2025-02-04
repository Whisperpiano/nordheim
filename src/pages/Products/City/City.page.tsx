import { motion } from "framer-motion";

export default function City() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>City</h1>
      </motion.div>
    </>
  );
}
