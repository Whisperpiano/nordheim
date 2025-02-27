import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";

export interface ContactSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}
