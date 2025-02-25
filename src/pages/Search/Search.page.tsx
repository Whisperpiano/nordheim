import { useSearchParams } from "react-router";
// import ProductCard from "../../components/ProductCard/ProductCard.component";
import FiltersBar from "../../components/FiltersBar/FiltersBar.component";
import { useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products/products";
import { FullProduct } from "../../lib/schemas/productSchema";

import SearchProductCard from "../../components/ProductCard/SearchProductCard.component";

export default function Search() {
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

  const { data: mountainProducts } = useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => {
      console.log("LOCO FETCHING");
      return getProductsByCategory("mountain");
    },
    staleTime: Infinity,
    enabled: cachedMountainProducts === undefined,
    placeholderData: cachedMountainProducts,
  });

  const { data: cityProducts } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => {
      console.log("LOCO FETCHING");
      return getProductsByCategory("city");
    },
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

  return (
    <>
      <section className="pt-26 px-4 flex flex-col gap-2 py-10 mt-[100px] border-t border-gray-300 text-center">
        <h1 className="uppercase font-medium text-2xl font-condensed">
          Search
        </h1>
        <p className="text-neutral-500 font-sans text-sm font-normal">
          {searchedProducts.length} results for "{query}"
        </p>
      </section>
      <FiltersBar />
      //TODO Hacer bien esto, no puede ser searchProductCard ni ProductCard
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
        {searchedProducts.map((product) => (
          <SearchProductCard
            key={product.id}
            product={product}
            onClose={() => console.log("close")}
          />
        ))}
      </section>
    </>
  );
}
