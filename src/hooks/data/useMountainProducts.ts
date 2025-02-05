import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products/products";

export const useMountainProducts = () => {
  return useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => getProductsByCategory("mountain"),
  });
};
