import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { FullProduct } from "../../lib/schemas/productSchema";
import { getProductBySlug } from "../../api/products/products";

export function useSingleProduct() {
  const { slug, category = "city" } = useParams<{
    slug: string;
    category: "city" | "mountain";
  }>();

  // First try to use products from cache
  const queryClient = useQueryClient();
  const cachedProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    category,
  ]);
  const cachedProduct = cachedProducts?.find(
    (product) => product.slug === slug
  );

  // If no products cached, makes a refetch
  const {
    data: product,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products", category, slug],
    queryFn: () => getProductBySlug(slug ?? ""),
    initialData: cachedProduct ?? undefined,
    gcTime: 500,
  });

  return { product, isLoading, isFetching, slug, category };
}
