import { motion } from "framer-motion";
import { usePrefetchGlobalData } from "../../hooks/data/usePrefetchGlobalData";

import Logo from "../../components/Logo/Logo.component";
import CategoryCard from "./components/CategoryCard/CategoryCard.component";

import { homeVariants } from "./Home.variants";

export default function Home() {
  usePrefetchGlobalData();

  return (
    <>
      <header>
        <h1 className="sr-only">Nordheim - Premium backpacks</h1>

        <motion.div
          className="absolute w-full h-full md:h-auto flex z-20 justify-center mt-0 md:mt-10"
          {...homeVariants.header}
        >
          <Logo width={250} />
        </motion.div>
      </header>

      <main className="flex flex-col md:flex-row h-[100dvh] ">
        <CategoryCard category="city" />
        <CategoryCard category="mountain" />
      </main>

      <motion.footer
        className="absolute inset-0 z-10 flex justify-center items-end m-5 text-neutral-50/50 text-xs sm:text-sm uppercase font-condensed"
        {...homeVariants.footer}
      >
        © {new Date().getFullYear()} - NORDHEIM TEAM. ALL RIGHTS RESERVED
      </motion.footer>
    </>
  );
}
