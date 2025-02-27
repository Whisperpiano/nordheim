import { OrderItem } from "../../../../../../lib/schemas/profileSchema";
import { formatNumber } from "../../../../../../utils/formatNumber";

export default function OrderBody({ item }: { item: OrderItem }) {
  return (
    <article className="flex gap-4 items-center">
      <div className="relative inline-flex">
        <img
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${item.products.category}-images//${item.products.slug}-xs.webp`}
          alt="City"
          className="aspect-square w-[64px] object-cover"
        />
        <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
          {item.quantity}
        </span>
      </div>
      <section className="flex-1">
        <div className="flex justify-between items-center">
          <span className="text-neutral-950 text-sm font-medium font-condensed">
            {item.products.title}
          </span>
          <span className="text-neutral-500 text-sm font-medium font-condensed">
            {formatNumber(item.products.price)} kr
          </span>
        </div>
        <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
          {item.variants.volume}L / {item.variants.color}
        </span>
      </section>
    </article>
  );
}
