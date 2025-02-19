import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../../api/products/products";
import { useEffect } from "react";

export default function City() {
  const {
    data: products,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products", "city"],
    queryFn: () => getProductsByCategory("city"),
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
      <Banner category="city" />
      <FiltersBar />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </section>
    </>
  );
}
