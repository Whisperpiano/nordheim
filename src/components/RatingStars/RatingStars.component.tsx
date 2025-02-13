import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { RatingStarsProps } from "./RatingStars.types";

export default function RatingStars({ size }: RatingStarsProps) {
  return (
    <>
      <div className="flex  items-center">
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarHalfFill size={size} />
      </div>
    </>
  );
}
