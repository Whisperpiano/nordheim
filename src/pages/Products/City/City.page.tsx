import {
  RiArrowDownSLine,
  RiFootprintLine,
  RiInfinityLine,
  RiLandscapeLine,
  RiLeafLine,
  RiStarFill,
  RiStarHalfFill,
} from "react-icons/ri";

import { useCityProducts } from "../../../hooks/data/useCityProducts";
import { Link } from "react-router";

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
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/city-products.jpg')] bg-black/25 bg-blend-multiply h-[650px] flex items-end">
        <div className="px-4 mb-16">
          <h1 className="mb-2 text-6xl font-semibold tracking-tight leading-none text-neutral-50 uppercase font-condensed ">
            City
          </h1>
          <p className="text-lg font-normal text-neutral-50 font-sans">
            Elegant, functional design for the modern urban explorer.
          </p>
        </div>
      </section>
      <div className="flex justify-between my-1 border-y border-neutral-300">
        <button className="font-condensed uppercase text-sm flex gap-1 items-center border-r border-neutral-300 px-10 py-4">
          SORT BY <RiArrowDownSLine />
        </button>
        <button className="font-condensed uppercase text-sm flex gap-1 items-center border-l border-neutral-300 px-10 py-4">
          FILTER
        </button>
      </div>
      <section className="grid grid-cols-4 gap-0.5">
        <Link to="/products/city/hugger-backpack">
          <article>
            <img
              src="/city.jpg"
              alt="City"
              className="object-cover aspect-[4/5] w-full"
            />
            <div className="p-4">
              <h2 className="text-neutral-950 text-base font-semibold font-condensed">
                Huger Backpack
              </h2>
              <span className="text-neutral-500 font-sans text-sm font-normal">
                2995 kr
              </span>
              <div className="flex gap-2 items-center mt-1">
                <div className="flex gap-0.5 items-center">
                  <RiStarFill size={12} />
                  <RiStarFill size={12} />
                  <RiStarFill size={12} />
                  <RiStarFill size={12} />
                  <RiStarHalfFill size={12} />
                </div>
                <span className="text-neutral-500 font-sans text-xs font-normal">
                  5 reviews
                </span>
              </div>
            </div>
          </article>
        </Link>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
        <article>
          <img
            src="/city.jpg"
            alt="City"
            className="object-cover aspect-[4/5] w-full"
          />
          <div className="p-4">
            <h2 className="text-neutral-950 text-base font-semibold font-condensed">
              Huger Backpack
            </h2>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex gap-0.5 items-center">
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarFill size={12} />
                <RiStarHalfFill size={12} />
              </div>
              <span className="text-neutral-500 font-sans text-xs font-normal">
                5 reviews
              </span>
            </div>
          </div>
        </article>
      </section>

      <section className="flex text-center border-y border-neutral-300 py-10 mt-3">
        <div className="p-10">
          <RiLandscapeLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />
          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            Nordic craftsmanship
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Designed in Norway, inspired by the rugged landscapes of the North.
            Every detail reflects precision, durability, and timeless
            Scandinavian aesthetics
          </p>
        </div>
        <div className="p-10">
          <RiFootprintLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            FOR ADVENTURE
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Versatile backpacks engineered for both urban and outdoor explorers.
            Whether in the city or the mountains, Nordheim moves with you
          </p>
        </div>
        <div className="p-10">
          <RiLeafLine size={28} className="text-neutral-950/50 mx-auto mb-5" />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            SUSTAINABLY BUILT
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Eco-friendly materials and responsible production ensure a minimal
            footprint. Thoughtfully crafted for those who care about the planet.
          </p>
        </div>
        <div className="p-10">
          <RiInfinityLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            NMINIMAL & FUNCTIONAL
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Sleek, modern designs that blend elegance with practicality. Every
            backpack is made to adapt seamlessly to your lifestyle.
          </p>
        </div>
      </section>
    </>
  );
}
