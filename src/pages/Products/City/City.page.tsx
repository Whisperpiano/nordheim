import { motion } from "framer-motion";
import { useCityProducts } from "../../../hooks/data/useCityProducts";

export default function City() {
  const { data: products } = useCityProducts();
  console.log(products);
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
