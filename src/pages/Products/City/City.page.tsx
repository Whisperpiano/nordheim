import { useCityProducts } from "../../../hooks/data/useCityProducts";

import Banner from "../components/Banner/Banner.component";
import FiltersBar from "../../../components/FiltersBar/FiltersBar.component";
import ProductCard from "../../../components/ProductCard/ProductCard.component";

// TODO: AQUI PARA VER EL VIEW TRANSITION

// export default function City() {
//   const { data: products } = useCityProducts();
//   console.log(products);
//   return (
//     <>
//       <motion.div>
//         <h1>City</h1>
//         <motion.img
//           src="/city.jpg"
//           alt="City"
//           className="object-cover aspect-square w-58"
//           layoutId="image"
//         />
//       </motion.div>
//     </>
//   );
// }

export default function City() {
  const { data: products } = useCityProducts();
  console.log(products);
  return (
    <>
      <Banner category="city" />
      <FiltersBar />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>
    </>
  );
}
