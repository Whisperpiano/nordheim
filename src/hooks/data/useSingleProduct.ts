import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../../api/products/products";

export const useSingleProduct = (slug: string) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProductBySlug(slug),
  });
};
