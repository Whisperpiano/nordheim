import { useState } from "react";

export function useHandlePhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return { phoneNumber, handlePhoneNumberChange };
}
