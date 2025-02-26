import { AnimatePresence, motion } from "framer-motion";
import { useProductsByCategory } from "../../../hooks/data/useProductsByCategory";
import { useSorter } from "../../../hooks/data/useSorter";
import { mountainVariants } from "./Mountain.variants";

import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";
import ProductsLoader from "../components/ProductsLoader/ProductsLoader.component";
import ProductsError from "../components/ProductsError/ProductsError.component";

export default function Mountain() {
  // First try to use products from cache
  // If no products cached, makes a refetch
  const { products, isError, refetch } = useProductsByCategory("mountain");

  // Sort products
  const { sortedProducts } = useSorter(products ?? []);

  return (
    <>
      <motion.div {...mountainVariants.banner}>
        <Banner category="mountain" />
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
                key={product.id + product.slug}
                layout
                {...mountainVariants.product}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
