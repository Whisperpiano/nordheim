import { RiSearchLine } from "react-icons/ri";
import { SearchBarHeaderProps } from "./SearchBarHeader.types";

export default function SearchBarHeader({
  query,
  setQuery,
  handleSubmit,
}: SearchBarHeaderProps) {
  return (
    <form
      className="w-full flex items-center gap-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <RiSearchLine size={20} className="text-neutral-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for..."
        className="flex w-full placeholder:text-neutral-500 placeholder:font-condensed placeholder:uppercase placeholder:font-normal placeholder:text-base md:placeholder:text-lg outline-none me-10 bg-neutral-50"
      />
    </form>
  );
}
