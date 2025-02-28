import { motion } from "framer-motion";
import { Link } from "react-router";
import { CategoryCardProps } from "./CategoryCard.types";
import { categoryCardVariants } from "./CategoryCard.variants";

import HomeButton from "../HomeButton/HomeButton.component";
import ImageHome from "./components/ImageHome/ImageHome.component";

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      className="h-1/2 md:h-full flex-1 relative group cursor-pointer"
      {...categoryCardVariants[category]}
    >
      <Link to={`/products/${category}`}>
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        <motion.div
          className="absolute inset-0 flex justify-center items-center z-20"
          {...categoryCardVariants.button}
        >
          <HomeButton string={category}></HomeButton>
        </motion.div>

        <ImageHome
          name={category}
          format="both"
          className="h-full w-full object-cover brightness-75 saturate-[.40] contrast-[1.1] group-hover:saturate-[1.1] group-hover:brightness-[.8] transition-all duration-300 ease-in"
        />
      </Link>
    </motion.div>
  );
}
