import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../../api/products/products";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "@heroui/spinner";
import Button from "../../../components/Button/Button.component";

export default function City() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const {
    data: products,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => getProductsByCategory("city"),
    staleTime: Infinity,
    enabled: false,
  });

  useEffect(() => {
    if (!products) {
      refetch();
    }
  }, [products, refetch]);

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    return [...products].sort((a, b) => {
      if (sort === "title-asc") return a.title.localeCompare(b.title);
      if (sort === "title-desc") return b.title.localeCompare(a.title);
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });
  }, [products, sort]);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Banner category="city" />
        <FiltersBar />
      </motion.div>

      {!products && (
        <div className="grid place-content-center py-52">
          <Spinner size="lg" color="default" />
        </div>
      )}

      {isError && (
        <div className="grid place-content-center py-52">
          <p>No products found</p>
          <Button
            variant={"primary"}
            size={"sm"}
            shape={"square"}
            onClick={() => refetch()}
            className="mt-4"
          >
            Try again
          </Button>
        </div>
      )}

      <motion.section
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5"
        layout
      >
        <AnimatePresence>
          {products &&
            !isError &&
            sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
