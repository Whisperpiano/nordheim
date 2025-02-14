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
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        <motion.div
          className="absolute inset-0 flex justify-center items-center z-20"
          {...categoryCardVariants.button}
        >
          <HomeButton string={category}></HomeButton>
        </motion.div>

        <picture>
          {/* AVIF */}
          <source
            srcSet={`
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-xl.avif 1920w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-lg.avif 1200w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-md.avif 600w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-sm.avif 400w
    `}
            sizes="
      (max-width: 480px) 100vw, 
      (max-width: 768px) 50vw, 
      (max-width: 1024px) 50vw, 
      (max-width: 1440px) 50vw, 
      50vw"
            type="image/avif"
          />

          {/* WebP */}
          <source
            srcSet={`
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-xl.webp 1920w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-lg.webp 1200w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-md.webp 600w,
      https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-sm.webp 400w
    `}
            sizes="
      (max-width: 480px) 100vw, 
      (max-width: 768px) 50vw, 
      (max-width: 1024px) 50vw, 
      (max-width: 1440px) 50vw, 
      50vw"
            type="image/webp"
          />

          {/* Fallback */}
          <img
            src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${category}-lg.webp`}
            alt={`Imagen de ${category}`}
            className="h-full w-full object-cover brightness-75 saturate-[.40] contrast-[1.1] group-hover:saturate-[1.1] group-hover:brightness-[.8] transition-all duration-300 ease-in"
            loading="lazy"
          />
        </picture>
      </Link>
    </motion.div>
  );
}
