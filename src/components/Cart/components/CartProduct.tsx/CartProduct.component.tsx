import { RiAddLine, RiSubtractLine } from "react-icons/ri";

export default function CartProduct() {
  return (
    <article className="flex gap-4 items-center">
      <img
        src="/city.jpg"
        alt="City"
        className="aspect-square w-[120px] object-cover"
      />
      <section className="w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="text-neutral-950 text-sm font-medium font-condensed">
            Huger Backpack
          </span>
          <span className="text-neutral-500 text-sm font-medium font-condensed">
            2995 kr
          </span>
        </div>
        <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
          S / Grey
        </span>
        <div className="flex justify-between items-center mt-3">
          <div className="border border-neutral-300 inline-flex ">
            <button className="px-2.5 py-2 text-gray-700 cursor-pointer">
              <RiSubtractLine />
            </button>
            <span className="px-2.5 py-2 text-sm font-normal">1</span>
            <button className="px-2.5 py-2 text-gray-700 cursor-pointer ">
              <RiAddLine />
            </button>
          </div>
          <button className="text-xs  font-sans font-normal text-neutral-600 underline underline-offset-3 cursor-pointer">
            Remove
          </button>
        </div>
      </section>
    </article>
  );
}
