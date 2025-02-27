import { useState } from "react";
import { useNavigate } from "react-router";

export function useHandleCheckout() {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleChekout = () => {
    setIsNavigating(true);
    navigate("/checkout");
  };

  return { isNavigating, handleChekout };
}
