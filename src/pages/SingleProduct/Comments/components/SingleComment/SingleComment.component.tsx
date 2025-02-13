import { RiCheckLine, RiStarFill, RiStarHalfFill } from "react-icons/ri";

export interface SingleCommentProps {
  review: {
    email: string;
    id: number;
    product_id: string;
    rating: number;
    review: string;
    title: string;
    username: string;
    verified: boolean;
  };
}

export default function SingleComment({ review }: SingleCommentProps) {
  return (
    <article className="border-t border-neutral-300 py-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">{review.username}</span>
        {review.verified && (
          <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
            <span>
              <RiCheckLine size={16} />
            </span>
            Verified
          </span>
        )}
      </div>

      <div className="flex items-center mt-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            {index + 1 <= review.rating ? (
              <RiStarFill size={16} />
            ) : index + 0.5 <= review.rating ? (
              <RiStarHalfFill size={16} />
            ) : (
              <RiStarFill size={16} className="text-neutral-300" />
            )}
          </span>
        ))}
      </div>

      <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
        {review.title}
      </h3>
      <p className="text-neutral-950 font-sans text-sm font-light mt-1">
        {review.review}
      </p>
    </article>
  );
}
