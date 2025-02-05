import { Link } from "react-router";
import HomeButton from "./components/HomeButton.component";
import Logo from "../../components/Logo/Logo.component";
import { motion } from "framer-motion";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  getCityProducts,
  getMountainProducts,
} from "../../api/products/products";

// TODO: refactor

export default function Home() {
  const { data: cityProducts } = useSuspenseQuery({
    queryKey: ["products", "city"],
    queryFn: () => getCityProducts(),
  });

  const { data: mountainProducts } = useSuspenseQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => getMountainProducts(),
  });

  console.log(cityProducts);
  console.log(mountainProducts);

  return (
    <section className="flex flex-row h-screen relative">
      <h1 className="sr-only">Nordheim - Premium backpacks</h1>

      <motion.div
        className="absolute inset-0 z-20 flex justify-center mt-10"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>

      <motion.div
        className="flex-1 relative group cursor-pointer"
        initial={{ x: "-100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/products/city" aria-label="Explore city backpacks">
          <div
            className="absolute inset-0 bg-black/20 z-10"
            aria-hidden="true"
          ></div>

          <motion.div
            className="absolute inset-0 flex justify-center items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HomeButton>City</HomeButton>
          </motion.div>

          <div className="h-full">
            <picture>
              <source srcSet="/city.jpg" type="image/jpg" />
              <img
                src="/city.jpg"
                alt="City"
                className="h-full w-full object-cover brightness-75 saturate-75 contrast-120 group-hover:saturate-110 group-hover:brightness-80 transition-all duration-300 ease-in"
              />
            </picture>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="flex-1 relative group"
        initial={{ x: "100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ scale: 0.5 }}
      >
        <Link to="/products/mountain" aria-label="Explore mountain backpacks">
          <div
            className="absolute inset-0 bg-black/20 z-10"
            aria-hidden="true"
          ></div>

          <motion.div
            className="absolute inset-0 flex justify-center items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HomeButton>Mountain</HomeButton>
          </motion.div>

          <div className="h-full">
            <picture>
              <source srcSet="/mountain.jpg" type="image/jpg" />
              <img
                src="/mountain.jpg"
                alt="Mountain"
                className="h-full w-full object-cover brightness-75 saturate-75 contrast-120 group-hover:saturate-110 group-hover:brightness-80 transition-all duration-300 ease-in"
              />
            </picture>
          </div>
        </Link>
      </motion.div>

      <motion.p
        className="absolute inset-0 z-10 flex justify-center items-end m-5 text-neutral-50/50 text-sm uppercase font-condensed"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © 2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
      </motion.p>
    </section>
  );
}
