import { useState } from "react";

export function useHandleCardNumber() {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  return { cardNumber, handleCardNumber };
}
