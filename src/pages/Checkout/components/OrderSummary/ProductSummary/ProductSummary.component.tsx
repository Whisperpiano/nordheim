export default function ProductSummary() {
  return (
    <article className="flex gap-4 items-center">
      <div className="relative inline-flex">
        <img
          src="/city.jpg"
          alt="City"
          className="aspect-square w-[64px] object-cover"
        />
        <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
          2
        </span>
      </div>
      <section className="flex-1">
        <div className="flex justify-between items-center">
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
      </section>
    </article>
  );
}
