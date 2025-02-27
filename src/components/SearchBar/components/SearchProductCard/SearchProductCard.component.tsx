import { Link } from "react-router";
import { getAverageRating } from "../../../../utils/averageRating";
import { FullProduct } from "../../../../lib/schemas/productSchema";

import RatingStars from "../../../RatingStars/RatingStars.component";
import ImageSearchProduct from "./components/ImageSearchProduct/ImageSearchProduct.component";

export default function SearchProductCard({
  product,
  onClose,
}: {
  product: FullProduct;
  onClose: () => void;
}) {
  const { category, slug, reviews } = product;

  return (
    <Link
      to={`/products/${category}/${slug}`}
      className="group hover:bg-neutral-200/50 lg:hover:bg-transparent p-2 lg:p-0 rounded-md lg:rounded-none transition-colors duration-300"
      onClick={onClose}
    >
      <article className="flex lg:block">
        <div className="overflow-hidden">
          <ImageSearchProduct
            category={category}
            slug={slug}
            format="both"
            className="object-cover aspect-[4/5] w-[100px] lg:w-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="p-4">
          <h2 className="text-neutral-950 text-base font-semibold font-condensed">
            {product.title}
          </h2>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            {product.price} kr
          </span>
          <div className="flex gap-2 items-center mt-1">
            <div className="flex gap-0.5 items-center">
              <RatingStars size={12} rating={getAverageRating(reviews)} />
            </div>
            <span className="text-neutral-500 font-sans text-xs font-normal">
              {reviews.length} reviews
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
