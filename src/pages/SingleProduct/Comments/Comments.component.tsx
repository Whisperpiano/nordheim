import RatingStars from "../../../components/RatingStars/RatingStars.component";
import SingleComment from "./components/SingleComment/SingleComment.component";
import { ReviewsArray } from "../../../lib/schemas/productSchema";
import { formatRating } from "./Comments.utils";
import Button from "../../../components/Button/Button.component";
import { getAverageRating } from "../../../utils/averageRating";
import NoComments from "./components/NoComments/NoComments.component";

export default function Comments({ reviews }: { reviews: ReviewsArray }) {
  return (
    <>
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between border-t border-neutral-300 py-10">
        <div className="flex flex-col gap-3 sm:gap-0">
          <h2 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
            Customer reviews
          </h2>

          <div className="flex gap-2 items-center mt-1">
            <div className="flex  items-center">
              <RatingStars size={24} rating={getAverageRating(reviews)} />
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
        <NoComments />
      ) : (
        reviews.map((review) => (
          <SingleComment key={review.id + Math.random()} review={review} />
        ))
      )}
    </>
  );
}
