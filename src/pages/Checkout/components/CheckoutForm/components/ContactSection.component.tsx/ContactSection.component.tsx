import { Input } from "@heroui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";

export interface ContactSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}

export default function ContactSection({
  register,
  errors,
}: ContactSectionProps) {
  return (
    <>
      <h2 className="text-lg font-sans font-medium mb-3">Contact</h2>
      <Input
        label="Email address"
        type="email"
        variant="faded"
        radius="none"
        className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email?.message}
        {...register("email")}
        classNames={{
          inputWrapper:
            errors.email &&
            "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
        }}
      />
    </>
  );
}
