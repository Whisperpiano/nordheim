import { AnimatePresence, motion } from "framer-motion";
import { useProductsByCategory } from "../../../hooks/data/useProductsByCategory";
import { useSorter } from "../../../hooks/data/useSorter";

import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";
import ProductsError from "../components/ProductsError/ProductsError.component";
import ProductsLoader from "../components/ProductsLoader/ProductsLoader.component";
import { cityVariants } from "./City.variants";
import usePageTitle from "../../../hooks/title/usePageTitle";

export default function City() {
  // First try to use products from cache
  // If no products cached, makes a refetch
  const { products, isError, refetch } = useProductsByCategory("city");

  // Sort products
  const { sortedProducts } = useSorter(products ?? []);

  usePageTitle("Nordheim | City");

  return (
    <>
      <motion.div {...cityVariants.banner}>
        <Banner category="city" />
        <FiltersBar />
      </motion.div>

      {!products && <ProductsLoader />}

      {isError && <ProductsError refetch={refetch} />}

      <motion.section
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5"
        layout
      >
        <AnimatePresence>
          {products &&
            !isError &&
            sortedProducts.map((product) => (
              <motion.div
                key={product.id + product.category}
                layout
                {...cityVariants.product}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
