import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { CartItem, useCartStore } from "../../../../store/cartStore";
import { motion } from "framer-motion";

export default function CartProduct({ item }: { item: CartItem }) {
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const handleIncrement = (id: string) => {
    incrementItem(id);
  };

  const handleDecrement = (id: string) => {
    decrementItem(id);
  };

  return (
    <motion.article
      className="flex gap-4 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      layout
    >
      <img
        src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${item.category}-images//${item.slug}-xs.webp`}
        alt="City"
        className="aspect-square w-[120px] object-cover"
      />
      <section className="w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="text-neutral-950 text-sm font-medium font-condensed">
            {item.title}
          </span>
          <span className="text-neutral-500 text-sm font-medium font-condensed">
            {item.price} kr
          </span>
        </div>
        <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
          {item.variant.volume}L / {item.variant.color}
        </span>
        <div className="flex justify-between items-center mt-3">
          <div className="border border-neutral-300 inline-flex ">
            <button
              type="button"
              className="px-2.5 py-2 text-gray-700 cursor-pointer"
              onClick={() => handleDecrement(item.id)}
            >
              <RiSubtractLine />
            </button>
            <span className="px-2.5 py-2 text-sm font-normal">
              {item.quantity}
            </span>
            <button
              type="button"
              className="px-2.5 py-2 text-gray-700 cursor-pointer "
              onClick={() => handleIncrement(item.id)}
            >
              <RiAddLine />
            </button>
          </div>
          <button
            type="button"
            className="text-xs  font-sans font-normal text-neutral-600 underline underline-offset-3 cursor-pointer"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </section>
    </motion.article>
  );
}
