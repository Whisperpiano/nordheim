import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { RatingStarsProps } from "./RatingStars.types";

export default function RatingStars({ size, rating }: RatingStarsProps) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => {
        return index + 1 <= rating ? (
          <RiStarFill key={index} size={size} />
        ) : index + 0.5 <= rating ? (
          <RiStarHalfFill key={index} size={size} />
        ) : (
          <RiStarFill key={index} size={size} className="text-neutral-300" />
        );
      })}
    </>
  );
}
