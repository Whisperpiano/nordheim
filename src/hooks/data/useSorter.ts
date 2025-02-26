import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { FullProductsArray } from "../../lib/schemas/productSchema";

export function useSorter(products: FullProductsArray) {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

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

  return { sortedProducts, sort };
}
