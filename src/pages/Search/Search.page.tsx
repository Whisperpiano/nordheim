import { useSearchProducts } from "../../hooks/data/useSearchProducts";
import { useSorter } from "../../hooks/data/useSorter";
import { AnimatePresence, motion } from "framer-motion";

import FiltersBar from "../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";

export default function Search() {
  // First try to use products from cache
  // If no products cached, makes a refetch
  const { searchedProducts, query } = useSearchProducts();

  // Sort products
  const { sortedProducts } = useSorter(searchedProducts);

  return (
    <>
      <section className="pt-26 px-4 flex flex-col gap-2 py-10 mt-[100px] border-t border-gray-300 text-center">
        <h1 className="uppercase font-medium text-2xl font-condensed">
          Search
        </h1>
        <p className="text-neutral-500 font-sans text-sm font-normal">
          {searchedProducts.length} results for "{query}"
        </p>
      </section>

      <FiltersBar />

      <motion.section
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5"
        layout
      >
        <AnimatePresence>
          {sortedProducts.map((product) => (
            <motion.div key={product.id + product.category + "search"} layout>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
