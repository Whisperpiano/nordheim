import { useState } from "react";

export function useHandleCardSecurityCode() {
  const [cardSecurityCode, setCardSecurityCode] = useState("");

  const handleCardSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);
    setCardSecurityCode(value);
  };

  return { cardSecurityCode, handleCardSecurityCode };
}
