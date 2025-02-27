import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";

export interface DeliverySectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}
