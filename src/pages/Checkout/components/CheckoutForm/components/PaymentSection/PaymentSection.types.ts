import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";

export interface PaymentSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  control: Control<CheckoutFormData>;
}
