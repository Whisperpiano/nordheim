import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductDetails/ProductDetails.component";
import { motion } from "framer-motion";

export default function SingleProduct() {
  return (
    <>
      <article className="grid grid-cols-12 gap-16 mt-[100px] border-t border-gray-300 p-4">
        <motion.img
          src="/city.jpg"
          alt="City"
          className="object-cover aspect-[4/5] w-full col-span-7 max-h-[calc(100vh-100px)]"
        />
        <ProductDetails />
      </article>

      <Comments />
    </>
  );
}
