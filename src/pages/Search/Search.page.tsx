import { useSearchParams } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import FiltersBar from "../../components/FiltersBar/FiltersBar.component";

export default function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <>
      <section className="pt-26 px-4 flex flex-col gap-2 py-10 mt-[100px] border-t border-gray-300 text-center">
        <h1 className="uppercase font-medium text-2xl font-condensed">
          Search
        </h1>
        <p className="text-neutral-500 font-sans text-sm font-normal">
          5 results for "{query}"
        </p>
      </section>

      <FiltersBar />

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>
    </>
  );
}
