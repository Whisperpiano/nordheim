import Sorter from "./Sorter/Sorter.component";

export default function FiltersBar() {
  return (
    <>
      <div className="flex justify-end my-1 border-y border-neutral-300">
        <Sorter />
      </div>
    </>
  );
}
