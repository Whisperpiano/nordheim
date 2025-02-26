import { useState } from "react";
import { useModalStore } from "../../store/modalStore";
import { useCartStore } from "../../store/cartStore";
import { VariantsArray } from "../../lib/schemas/productSchema";

interface ProductFormHookProps {
  variants: VariantsArray;
  title: string;
  slug: string;
  price: number;
  category: "city" | "mountain";
}

export function useProductForm({
  variants,
  title,
  slug,
  price,
  category,
}: ProductFormHookProps) {
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

  return { quantity, handleDecrement, handleIncrement, handleAddToCart };
}
