import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { RatingProps } from "./Rating.types";

export default function Rating({ size }: RatingProps) {
  return (
    <>
      <div className="flex  items-center">
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarFill size={size} />
        <RiStarHalfFill size={size} />
      </div>
      <span className="text-neutral-500 font-sans text-sm font-normal">
        5 reviews
      </span>
    </>
  );
}
