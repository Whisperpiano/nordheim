import { useModalStore } from "../../store/modalStore";
import Sorter from "./Sorter/Sorter.component";

export default function FiltersBar() {
  const setFiltersOpen = useModalStore((state) => state.setFiltersOpen);

  return (
    <>
      <div className="flex justify-between my-1 border-y border-neutral-300">
        <Sorter />
        <button
          className="font-condensed uppercase text-sm flex gap-1 items-center border-l border-neutral-300 px-10 py-4"
          onClick={() => setFiltersOpen(true)}
        >
          Filter
        </button>
      </div>
    </>
  );
}
