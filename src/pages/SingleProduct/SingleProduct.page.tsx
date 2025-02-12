import { useEffect } from "react";
import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductInfo.component";
import ProductPicture from "./ProductPicture/ProductPicture.component";
import { useSearchParams } from "react-router";

// const product = {
//   category: "city",
//   description:
//     "No storm stands a chance against Stormshield. Engineered for maximum protection, this fully waterproof backpack ensures your gear stays dry even in torrential downpours. The sealed zippers, high-performance waterproof fabric, and reinforced seams provide unmatched durability. Whether you're hiking through rainforests or commuting in unpredictable weather, Stormshield keeps your essentials safe and secure.",
//   details: {
//     color: [
//       { hex: "#000000", name: "Black" },
//       { hex: "#FFFFFF", name: "White" },
//     ],
//     features: [
//       "Made from high-quality recycled materials that are environmentally friendly.",
//       "Waterproof and breathable",
//       "Durable and long-lasting",
//       "Lightweight and comfortable",
//     ],
//     specs: {
//       dimensions: "50x30x15",
//       volume: 30,
//       weight: 0.5,
//     },
//   },
//   discount: null,
//   id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
//   image: {
//     url: "/city.jpg",
//     alt: "City",
//     placeholder: "City",
//   },
//   price: 2995,
//   reviews: [
//     {
//       email: "john.doe@example.com",
//       id: 3,
//       product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
//       rating: 5,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       title: "Amazing backpack",
//       username: "John Doe",
//       verified: false,
//     },
//     {
//       email: "jane.doe@example.com",
//       id: 2,
//       product_id: "016e2a3d-f10d-4ccd-9ad9-5c5d6cfc17e1",
//       rating: 4,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       title: "Great backpack",
//       username: "Jane Doe",
//       verified: true,
//     },
//   ],
//   slug: "stormshield",
//   title: "Stormshield",
// };

export default function SingleProduct() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <>
      <article className="grid grid-cols-12 gap-16 mt-[100px] border-t border-gray-300 px-4 pb-8 pt-4">
        <ProductPicture />
        <ProductDetails />
      </article>

      <Comments />
    </>
  );
}
