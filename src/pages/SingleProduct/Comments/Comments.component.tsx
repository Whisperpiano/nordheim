import RatingStars from "../../../components/RatingStars/RatingStars.component";
import SingleComment from "./components/SingleComment/SingleComment.component";
import { ReviewsArray } from "../../../lib/schemas/productSchema";
import { formatRating } from "./Comments.utils";
import Button from "../../../components/Button/Button.component";

export default function Comments({ reviews }: { reviews: ReviewsArray }) {
  const totalRating = reviews.length
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  return (
    <>
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between border-t border-neutral-300 py-10">
        <div className="flex flex-col gap-3 sm:gap-0">
          <h2 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
            Customer reviews
          </h2>

          <div className="flex gap-2 items-center mt-1">
            <div className="flex  items-center">
              <RatingStars size={24} rating={totalRating} />
            </div>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              {reviews.length > 0 ? formatRating(reviews) : 0} out of 5
            </span>
          </div>
        </div>
        <Button variant={"primary"} size={"sm"} disabled>
          Write a review
        </Button>
      </div>

      {reviews.length === 0 ? (
        <div className="border-t border-neutral-300 py-32 w-full text-center">
          <p className="text-neutral-500 font-condensed uppercase font-normal text-sm">
            No reviews yet
          </p>
        </div>
      ) : (
        reviews.map((review) => (
          <SingleComment key={review.id + Math.random()} review={review} />
        ))
      )}

      {reviews.length > 5 && (
        <div className="max-w-[120px] mx-auto mt-8">
          <button className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer">
            Read more
          </button>
        </div>
      )}
    </>
  );
}
