import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FullProduct } from "../../lib/schemas/productSchema";
import { getProductsByCategory } from "../../api/products/products";

export function useSearchProducts() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const queryClient = useQueryClient();
  const cachedMountainProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "mountain",
  ]);

  const cachedCityProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "city",
  ]);

  const {
    data: mountainProducts,
    isLoading: isMountainLoading,
    isError: isMountainError,
  } = useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => getProductsByCategory("mountain"),
    staleTime: Infinity,
    enabled: cachedMountainProducts === undefined,
    placeholderData: cachedMountainProducts,
  });

  const {
    data: cityProducts,
    isLoading: isCityLoading,
    isError: isCityError,
  } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => getProductsByCategory("city"),
    staleTime: Infinity,
    enabled: cachedCityProducts === undefined,
    placeholderData: cachedCityProducts,
  });

  const searchedProducts = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase().trim();

    if (lowerQuery === "city") return cityProducts ?? [];
    if (lowerQuery === "mountain") return mountainProducts ?? [];

    const allProducts = [...(cityProducts ?? []), ...(mountainProducts ?? [])];

    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerQuery)
    );
  }, [cityProducts, mountainProducts, query]);

  return {
    searchedProducts,
    isMountainLoading,
    isMountainError,
    isCityLoading,
    isCityError,
    query,
  };
}
