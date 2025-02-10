import { AnimatePresence, motion } from "framer-motion";
import { fallbackVariants } from "./FadingFallback.variants";
import Logo from "../../../components/Logo/Logo.component";
import { Spinner } from "@heroui/spinner";

export default function FadingFallback() {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        variants={fallbackVariants}
        initial="visible"
        animate="visible"
        exit="exit"
        className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-neutral-50"
      >
        <Logo theme="dark" width={300} />
        <Spinner size="lg" color="default" />
      </motion.div>
    </AnimatePresence>
  );
}
