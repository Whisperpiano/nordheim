import RatingStars from "../../../../../components/RatingStars/RatingStars.component";

import { ReviewsArray } from "../../../../../lib/schemas/productSchema";

export interface ProductHeaderProps {
  title: string;
  price: number;
  reviews: ReviewsArray;
  scrollToReviews: () => void;
}

export default function ProductHeader({
  title,
  price,
  reviews,
  scrollToReviews,
}: ProductHeaderProps) {
  const totalRating = reviews.length
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;
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
        <RatingStars size={16} rating={totalRating} />
        <span className="text-neutral-500 font-sans text-sm font-normal">
          {reviews.length} reviews
        </span>
      </div>
    </div>
  );
}
