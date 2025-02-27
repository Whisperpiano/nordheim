import { useMemo } from "react";
import { FullProduct } from "../../lib/schemas/productSchema";

export function useSearchedProducts(
  query: string,
  mountainProducts?: FullProduct[],
  cityProducts?: FullProduct[]
) {
  const searchedProducts = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase().trim();

    if (lowerQuery.includes("city")) return cityProducts?.slice(0, 3) ?? [];
    if (lowerQuery.includes("mountain"))
      return mountainProducts?.slice(0, 3) ?? [];

    const allProducts = [...(cityProducts ?? []), ...(mountainProducts ?? [])];

    return allProducts
      .filter((product) => product.title.toLowerCase().includes(lowerQuery))
      .slice(0, 3);
  }, [cityProducts, mountainProducts, query]);

  return searchedProducts;
}
