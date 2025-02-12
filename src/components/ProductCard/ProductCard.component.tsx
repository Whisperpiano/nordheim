import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ProductCard() {
  return (
    <Link to="/products/city/hugger-backpack">
      <article>
        <motion.img
          src="/city.jpg"
          alt="City"
          className="object-cover aspect-[4/5] w-full"
        />

        <div className="p-4">
          <h2 className="text-neutral-950 text-base font-semibold font-condensed">
            Huger Backpack
          </h2>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            2995 kr
          </span>
          <div className="flex gap-2 items-center mt-1">
            <div className="flex gap-0.5 items-center">
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarHalfFill size={12} />
            </div>
            <span className="text-neutral-500 font-sans text-xs font-normal">
              5 reviews
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
