import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { ContactFormFieldProps } from "./ContactFormField.types";
import { contactFormCategories } from "../../../../../../config/config";

export default function ContactFormField({
  as,
  type,
  label,
  placeholder,
  registerName,
  register,
  errors,
}: ContactFormFieldProps) {
  if (as === "input") {
    return (
      <Input
        label={label}
        type={type}
        variant="faded"
        radius="none"
        labelPlacement="outside"
        placeholder={placeholder}
        className="[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50"
        isInvalid={!!errors[registerName]}
        errorMessage={errors[registerName]?.message}
        {...register(registerName)}
        classNames={{
          inputWrapper:
            errors[registerName] &&
            "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
        }}
      />
    );
  }
  if (as === "textarea") {
    return (
      <Textarea
        label={label}
        radius="none"
        variant="faded"
        placeholder={placeholder}
        labelPlacement="outside"
        isInvalid={!!errors[registerName]}
        errorMessage={errors[registerName]?.message}
        {...register(registerName)}
        classNames={{
          innerWrapper: "min-h-[250px] md:min-h-[450px]",
          input: "min-h-[250px] md:min-h-[450px]",
          inputWrapper: `bg-neutral-50 ${
            errors[registerName] &&
            "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500"
          }`,
        }}
      />
    );
  }
  if (as === "select") {
    return (
      <Select
        label={label}
        radius="none"
        variant="faded"
        placeholder={placeholder}
        labelPlacement="outside"
        isInvalid={!!errors[registerName]}
        errorMessage={errors[registerName]?.message}
        defaultSelectedKeys={["order"]}
        {...register(registerName)}
        classNames={{
          popoverContent: "rounded-none bg-neutral-50",
          trigger: `py-5 bg-neutral-50 ${
            errors[registerName] &&
            "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500"
          }`,
        }}
      >
        {contactFormCategories.map((category) => (
          <SelectItem
            key={category.key}
            value={category.key}
            classNames={{ base: "rounded-none" }}
          >
            {category.label}
          </SelectItem>
        ))}
      </Select>
    );
  }
}
