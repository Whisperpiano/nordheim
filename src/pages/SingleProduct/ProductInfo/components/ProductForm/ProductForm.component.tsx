import Button from "../../../../../components/Button/Button.component";
import { useState } from "react";
import clsx from "clsx";
import { useModalStore } from "../../../../../store/modalStore";
import { useCartStore } from "../../../../../store/cartStore";
import { ProductFormProps } from "./ProductForm.types";
import { getStockClass, getStockText } from "./ProductForm.utils";
import QuantityCounter from "./components/QuantityCounter.component";

export default function ProductForm({
  variants,
  title,
  slug,
  price,
  category,
}: ProductFormProps) {
  const [quantity, setQuantity] = useState(1);

  const setCartOpen = useModalStore((state) => state.setCartOpen);
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

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
      <QuantityCounter
        quantity={quantity}
        stock={variants[0].stock}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

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
            <span
              className={clsx(
                "flex w-2.5 h-2.5 rounded-full me-1.5 shrink-0",
                getStockClass(variants[0].stock)
              )}
            ></span>
            {getStockText(variants[0].stock)}
          </span>
        </div>
      </div>
    </>
  );
}
