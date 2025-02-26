import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products/products";

export function useProductsByCategory(category: "city" | "mountain") {
  const {
    data: products,
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
    staleTime: Infinity,
    enabled: false,
  });

  useEffect(() => {
    if (!products) {
      refetch();
    }
  }, [products, refetch]);

  return { products, isError, isLoading, isFetching, refetch };
}
