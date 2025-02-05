import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products/products";

export const useCityProducts = () => {
  return useQuery({
    queryKey: ["products", "city"],
    queryFn: () => getProductsByCategory("city"),
  });
};
