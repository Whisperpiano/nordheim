import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FullProduct } from "../../lib/schemas/productSchema";
import { getProductsByCategory } from "../../api/products/products";

export function useCacheProducts() {
  const queryClient = useQueryClient();

  const cachedMountainProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "mountain",
  ]);

  const cachedCityProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    "city",
  ]);

  const { data: mountainProducts } = useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => {
      return getProductsByCategory("mountain");
    },
    staleTime: Infinity,
    enabled: cachedMountainProducts === undefined,
    placeholderData: cachedMountainProducts,
  });

  const { data: cityProducts } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => {
      return getProductsByCategory("city");
    },
    staleTime: Infinity,
    enabled: cachedCityProducts === undefined,
    placeholderData: cachedCityProducts,
  });

  return { mountainProducts, cityProducts };
}
