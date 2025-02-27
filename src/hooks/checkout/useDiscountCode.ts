import { useState } from "react";
import { toast } from "sonner";

export function useDiscountCode() {
  const [discountCode, setDiscountCode] = useState<string>("");

  const handleClick = () => {
    if (discountCode.length === 0) return;
    toast.error("Discount code or gift card is not valid.");
    setDiscountCode("");
  };

  return { discountCode, setDiscountCode, handleClick };
}
