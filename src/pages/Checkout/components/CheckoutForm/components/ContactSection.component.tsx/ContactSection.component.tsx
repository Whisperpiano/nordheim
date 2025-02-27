import { Input } from "@heroui/input";
import { errorInputStyles, inputStyle } from "../../CheckoutForm.styles";
import { ContactSectionProps } from "./ContactSection.types";

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
        className={inputStyle}
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email?.message}
        {...register("email")}
        classNames={{
          inputWrapper: errors.email && errorInputStyles,
        }}
      />
    </>
  );
}
