import { motion } from "framer-motion";

export default function ProductPicture() {
  return (
    <motion.img
      src="/city.jpg"
      alt="City"
      className="object-cover aspect-[4/5] w-full col-span-12 lg:col-span-7 max-h-[calc(100vh-100px)]"
    />
  );
}
