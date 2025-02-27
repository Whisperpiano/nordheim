import { useCartStore } from "../../store/cartStore";

export function useCartControllers() {
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

  return { handleRemove, handleIncrement, handleDecrement };
}
