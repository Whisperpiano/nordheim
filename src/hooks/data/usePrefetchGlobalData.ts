import { useSuspenseQueries } from "@tanstack/react-query";

import { getProductsByCategory } from "../../api/products/products";
import { getBannerImage } from "../../api/images/images";

export function usePrefetchGlobalData() {
  return useSuspenseQueries({
    queries: [
      {
        queryKey: ["products", "city"],
        queryFn: () => getProductsByCategory("city"),
        staleTime: Infinity,
      },
      {
        queryKey: ["products", "mountain"],
        queryFn: () => getProductsByCategory("mountain"),
        staleTime: Infinity,
      },
      {
        queryKey: ["banner", "city"],
        queryFn: () => getBannerImage("city"),
        staleTime: Infinity,
      },
      {
        queryKey: ["banner", "mountain"],
        queryFn: () => getBannerImage("mountain"),
        staleTime: Infinity,
      },
    ],
  });
}
