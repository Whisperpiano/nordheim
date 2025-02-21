import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import Button from "../../../../../components/Button/Button.component";
import { useState } from "react";
import { VariantsArray } from "../../../../../lib/schemas/productSchema";
import clsx from "clsx";
import { useModalStore } from "../../../../../store/modalStore";
import { useCartStore } from "../../../../../store/cartStore";

export default function ProductForm({
  variants,
  title,
  slug,
  price,
  category,
}: {
  variants: VariantsArray;
  title: string;
  slug: string;
  price: number;
  category: "city" | "mountain";
}) {
  const [quantity, setQuantity] = useState(1);

  const setCartOpen = useModalStore((state) => state.setCartOpen);

  const addItemToCart = useCartStore((state) => state.addItem);

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity === variants[0].stock) return;
    setQuantity(quantity + 1);
  };

  const stockClass = clsx(
    "flex w-2.5 h-2.5 rounded-full me-1.5 shrink-0",
    variants[0].stock > 10
      ? "bg-green-500"
      : variants[0].stock > 0
      ? "bg-amber-500"
      : "bg-red-500"
  );

  const stockText =
    variants[0].stock > 10
      ? "In stock"
      : variants[0].stock > 0
      ? "Few left"
      : "Out of stock";

  const handleAddToCart = () => {
    setCartOpen(true);
    addItemToCart({
      id: variants[0].product_id,
      title,
      slug,
      price,
      category,
      quantity,
      variant: {
        id: variants[0].id,
        volume: variants[0].volume,
        color: variants[0].color,
      },
    });
    setQuantity(1);
  };

  return (
    <>
      <div className="mt-4">
        <div>
          <span className="text-xs font-sans">
            <strong>Quantity:</strong>
          </span>
        </div>
        <div className="border border-neutral-300 inline-flex mt-2">
          <button
            type="button"
            className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-300 disabled:text-gray-300 disabled:cursor-not-allowed"
            onClick={handleDecrement}
            disabled={variants[0].stock <= 0}
          >
            <RiSubtractLine />
          </button>
          <span
            className={`px-3.5 py-3 text-sm font-normal ${
              variants[0].stock <= 0 ? "text-neutral-300" : "text-neutral-950"
            }`}
          >
            {quantity}
          </span>
          <button
            type="button"
            className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-300 disabled:text-gray-300 disabled:cursor-not-allowed"
            onClick={handleIncrement}
            disabled={variants[0].stock <= 0}
          >
            <RiAddLine />
          </button>
        </div>
      </div>

      <div className="mt-8 pb-2">
        <Button
          variant="primary"
          size="md"
          font="primary"
          shape="square"
          fontSize="sm"
          className="w-full"
          disabled={variants[0].stock <= 0}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>

        <div className="flex justify-between items-center mt-2.5 ms-1">
          <span className="text-neutral-800 font-sans text-xs font-normal">
            Buy now pay later with <strong>Klarna</strong>
          </span>
          <span className="flex items-center text-xs font-medium text-neutral-950 me-1">
            <span className={stockClass}></span>
            {stockText}
          </span>
        </div>
      </div>
    </>
  );
}
