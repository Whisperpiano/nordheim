import { motion } from "framer-motion";

export default function City() {
  return (
    <>
      <motion.div>
        <h1>City</h1>
        <motion.img
          src="/city.jpg"
          alt="City"
          className="object-cover aspect-square w-58"
          layoutId="image"
        />
      </motion.div>
    </>
  );
}
