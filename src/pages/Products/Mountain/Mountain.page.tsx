import { useMountainProducts } from "../../../hooks/data/useMountainProducts";

import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";

export default function Mountain() {
  const { data: products } = useMountainProducts();
  if (!products) return <div>Loading...</div>;
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
