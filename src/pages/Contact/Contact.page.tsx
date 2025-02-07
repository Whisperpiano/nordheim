import { motion } from "framer-motion";
import { Input } from "@heroui/input";

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Contact</h1>
        <div className="pt-14">
          <Input label="Email" type="email" />
          <Input label="Email" placeholder="Enter your email" type="email" />
        </div>
      </motion.div>
    </>
  );
}
