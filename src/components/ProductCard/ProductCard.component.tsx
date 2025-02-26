import { Link } from "react-router";

import { FullProduct } from "../../lib/schemas/productSchema";
import RatingStars from "../RatingStars/RatingStars.component";
import ImageProduct from "./components/ImageProduct/ImageProduct.component";
import { getAverageRating } from "../../utils/averageRating";

export default function ProductCard({ product }: { product: FullProduct }) {
  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group"
    >
      <article>
        <div className="overflow-hidden">
          <ImageProduct
            category={product.category}
            slug={product.slug}
            format="both"
            className="object-cover aspect-[4/5] w-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="px-4 pb-8 pt-4">
          <h2 className="text-neutral-950 text-base font-semibold font-condensed">
            {product.title}
          </h2>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            {product.price} kr
          </span>
          <div className="flex gap-2 items-center mt-1">
            <div className="flex gap-0.5 items-center">
              <RatingStars
                size={12}
                rating={getAverageRating(product.reviews)}
              />
            </div>
            <span className="text-neutral-500 font-sans text-xs font-normal">
              {product.reviews.length} reviews
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
