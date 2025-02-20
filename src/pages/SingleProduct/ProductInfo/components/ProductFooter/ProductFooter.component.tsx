import { RiFileTextLine, RiLoopLeftLine, RiTruckLine } from "react-icons/ri";

export default function ProductFooter() {
  return (
    <div className="flex justify-between mt-8 max-w-[650px] mx-auto px-4">
      <div className="flex flex-col gap-3">
        <RiFileTextLine className="mx-auto text-neutral-950/75" size={20} />
        <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
          2 year warranty
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <RiTruckLine className="mx-auto text-neutral-950/75" size={20} />
        <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
          Free shipoping
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <RiLoopLeftLine className="mx-auto text-neutral-950/75" size={20} />
        <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
          Free returns
        </span>
      </div>
    </div>
  );
}
