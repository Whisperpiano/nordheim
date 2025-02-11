import { motion } from "framer-motion";
import { Link } from "react-router";
import { CategoryCardProps } from "./CategoryCard.types";
import { categoryCardVariants } from "./CategoryCard.variants";

import HomeButton from "../HomeButton/HomeButton.component";

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      className="h-1/2 md:h-full flex-1 relative group cursor-pointer"
      {...categoryCardVariants[category]}
    >
      <Link to={`/products/${category}`}>
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        <motion.div
          className="absolute inset-0 flex justify-center items-center z-20"
          {...categoryCardVariants.button}
        >
          <HomeButton string={category}></HomeButton>
        </motion.div>

        <picture>
          <source
            srcSet={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images//${category}-big.jpg`}
            type="image/jpg"
          />
          <img
            src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images//${category}-big.jpg`}
            alt={`${category} collection`}
            className="h-full w-full object-cover brightness-75 saturate-[.75] contrast-[1.2] group-hover:saturate-[1.1] group-hover:brightness-[.8] transition-all duration-300 ease-in"
          />
        </picture>
      </Link>
    </motion.div>
  );
}
