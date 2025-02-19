import { Control, FieldErrors } from "react-hook-form";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";

export interface ShippingSectionProps {
  errors: FieldErrors<CheckoutFormData>;
  control: Control<CheckoutFormData>;
}
