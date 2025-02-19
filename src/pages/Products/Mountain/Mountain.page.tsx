import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProductsByCategory } from "../../../api/products/products";

export default function Mountain() {
  const {
    data: products,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products", "mountain"],
    queryFn: () => getProductsByCategory("mountain"),
    staleTime: Infinity,
    enabled: false,
  });

  useEffect(() => {
    if (!products) {
      refetch();
    }
  }, [products, refetch]);

  if (isError) {
    return <div>Error</div>;
  }
  if (!products) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Banner category="mountain" />
      <FiltersBar />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </section>
    </>
  );
}
