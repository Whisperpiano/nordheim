import RatingStars from "../../../../../components/RatingStars/RatingStars.component";

export default function ProductHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
        Huger Backpack
      </h1>
      <span className="text-neutral-500 font-sans text-lg font-normal">
        2995 kr
      </span>
      <div className="flex gap-1 items-center mt-1">
        <RatingStars size={16} />
        <span className="text-neutral-500 font-sans text-sm font-normal">
          5 reviews
        </span>
      </div>
    </div>
  );
}
