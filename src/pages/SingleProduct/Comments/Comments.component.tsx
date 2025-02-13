import { Review, reviews } from "./Comments.utils";
import RatingStars from "../../../components/RatingStars/RatingStars.component";
import SingleComment from "./components/SingleComment/SingleComment.component";

export default function Comments() {
  function formatRating(reviews: Review[]) {
    if (reviews.length === 0) return 0;

    const averageRating =
      reviews.reduce((acc, rating) => acc + rating.rating, 0) / reviews.length;

    return averageRating.toFixed(2);
  }

  return (
    <section className="p-4">
      <div className="flex items-center justify-between border-t border-neutral-300 py-10">
        <h2 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
          Customer reviews
        </h2>

        <div className="flex gap-2 items-center mt-1">
          <div className="flex  items-center">
            <RatingStars size={24} />
          </div>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            {formatRating(reviews)} out of 5
          </span>
        </div>
      </div>

      {reviews.map((review) => (
        <SingleComment key={review.id + Math.random()} review={review} />
      ))}

      <div className="max-w-[120px] mx-auto mt-8">
        <button className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer">
          Read more
        </button>
      </div>
    </section>
  );
}
