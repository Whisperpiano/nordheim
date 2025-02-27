import { useEffect } from "react";
import { UseFormWatch } from "react-hook-form";
import { CheckoutFormData } from "../../lib/schemas/checkoutSchema";

interface ShippingHandlerProps {
  selectedShipping: "economy" | "home";
  setSelectedShipping: (shipping: "economy" | "home") => void;
  watch: UseFormWatch<CheckoutFormData>;
}

export function useShippingHandler({
  selectedShipping,
  setSelectedShipping,
  watch,
}: ShippingHandlerProps) {
  const shipping = watch("shipping");

  useEffect(() => {
    if (shipping) {
      setSelectedShipping(shipping);
    }
  }, [shipping, setSelectedShipping]);

  return { shipping: selectedShipping };
}
