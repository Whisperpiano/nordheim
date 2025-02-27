import { useState } from "react";

export function useHandleCardExpiration() {
  const [cardExpiration, setCardExpiration] = useState("");

  const handleCardExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 6) value = value.slice(0, 6);

    if (value.length > 2) {
      value = `${value.slice(0, 2)} / ${value.slice(2)}`;
    } else if (value.length === 2) {
      value = `${value} / `;
    }

    setCardExpiration(value);
  };

  return { cardExpiration, handleCardExpiration };
}
