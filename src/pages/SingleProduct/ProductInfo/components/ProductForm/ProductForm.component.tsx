import { useProductForm } from "../../../../../hooks/form/useProductForm";
import { getStockClass, getStockText } from "./ProductForm.utils";
import { ProductFormProps } from "./ProductForm.types";

import Button from "../../../../../components/Button/Button.component";
import QuantityCounter from "./components/QuantityCounter.component";

import clsx from "clsx";

export default function ProductForm({
  variants,
  title,
  slug,
  price,
  category,
}: ProductFormProps) {
  const { quantity, handleDecrement, handleIncrement, handleAddToCart } =
    useProductForm({ variants, title, slug, price, category });

  const stock = variants[0].stock;

  return (
    <>
      <QuantityCounter
        quantity={quantity}
        stock={stock}
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
          disabled={stock <= 0}
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
                getStockClass(stock)
              )}
            ></span>
            {getStockText(stock)}
          </span>
        </div>
      </div>
    </>
  );
}
