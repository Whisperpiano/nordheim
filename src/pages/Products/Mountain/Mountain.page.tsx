import { motion } from "framer-motion";
import { useMountainProducts } from "../../../hooks/data/useMountainProducts";

export default function Mountain() {
  const { data: products } = useMountainProducts();
  console.log(products);
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
