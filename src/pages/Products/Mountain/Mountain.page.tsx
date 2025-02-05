import { motion } from "framer-motion";

export default function Mountain() {
  return (
    <>
      <motion.div>
        <h1>Mountain</h1>
        <motion.img
          src="/city.jpg"
          alt="City"
          className="object-cover aspect-square w-96"
          layoutId="image"
        />
      </motion.div>
    </>
  );
}
