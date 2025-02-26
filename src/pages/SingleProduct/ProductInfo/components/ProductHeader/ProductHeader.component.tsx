import { ProductHeaderProps } from "./ProductHeader.types";
import { getAverageRating } from "../../../../../utils/averageRating";

import RatingStars from "../../../../../components/RatingStars/RatingStars.component";

export default function ProductHeader({
  title,
  price,
  reviews,
  scrollToReviews,
}: ProductHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
        {title}
      </h1>
      <span className="text-neutral-500 font-sans text-lg font-normal">
        {price} kr
      </span>
      <div
        className="inline-flex gap-1 items-center mt-1 cursor-pointer"
        onClick={scrollToReviews}
      >
        <RatingStars size={16} rating={getAverageRating(reviews)} />
        <span className="text-neutral-500 font-sans text-sm font-normal">
          {reviews.length} reviews
        </span>
      </div>
    </div>
  );
}
