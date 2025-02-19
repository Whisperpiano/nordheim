import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Tooltip } from "@heroui/tooltip";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RiQuestionLine } from "react-icons/ri";
import { CheckoutFormData } from "../../../../../../lib/schemas/checkoutSchema";
import { cn } from "../../../../../../utils/cn";
import { useState } from "react";

export interface DeliverySectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}

export default function DeliverySection({
  register,
  errors,
}: DeliverySectionProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return (
    <>
      <div>
        <h2 className="text-lg font-sans font-medium mb-3">Delivery</h2>

        <div className="flex flex-col gap-3">
          <Select
            label="Country/Region"
            radius="none"
            variant="faded"
            isInvalid={Boolean(errors.country)}
            errorMessage={errors.country?.message}
            defaultSelectedKeys={["norway"]}
            {...register("country")}
            classNames={{
              popoverContent: "rounded-none bg-neutral-50",
              trigger: cn(
                "py-5 bg-neutral-50",
                errors.country &&
                  "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500"
              ),
            }}
          >
            <SelectItem
              key={"norway"}
              classNames={{
                base: "rounded-none",
              }}
            >
              Norway
            </SelectItem>
          </Select>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First name"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={Boolean(errors.firstName)}
              errorMessage={errors.firstName?.message}
              {...register("firstName")}
              classNames={{
                inputWrapper:
                  errors.firstName &&
                  "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
              }}
            />
            <Input
              label="Last name"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={Boolean(errors.lastName)}
              errorMessage={errors.lastName?.message}
              {...register("lastName")}
              classNames={{
                inputWrapper:
                  errors.lastName &&
                  "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
              }}
            />
          </div>
          <Input
            label="Company (optional)"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={Boolean(errors.company)}
            errorMessage={errors.company?.message}
            {...register("company")}
            classNames={{
              inputWrapper:
                errors.company &&
                "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
            }}
          />
          <Input
            label="Address"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={Boolean(errors.address)}
            errorMessage={errors.address?.message}
            {...register("address")}
            classNames={{
              inputWrapper:
                errors.address &&
                "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
            }}
          />
          <Input
            label="Apartment, suite, etc. (optional)"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={Boolean(errors.apartment)}
            errorMessage={errors.apartment?.message}
            {...register("apartment")}
            classNames={{
              inputWrapper:
                errors.apartment &&
                "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
            }}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Postal code"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={Boolean(errors.postalCode)}
              errorMessage={errors.postalCode?.message}
              {...register("postalCode")}
              classNames={{
                inputWrapper:
                  errors.postalCode &&
                  "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
              }}
            />
            <Input
              label="City"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={Boolean(errors.city)}
              errorMessage={errors.city?.message}
              {...register("city")}
              classNames={{
                inputWrapper:
                  errors.city &&
                  "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
              }}
            />
          </div>

          <Input
            label="Phone"
            type="text"
            variant="faded"
            radius="none"
            className=" [&_[data-slot='input-wrapper']]:bg-neutral-50"
            isInvalid={Boolean(errors.phone)}
            errorMessage={errors.phone?.message}
            value={phoneNumber}
            {...register("phone", {
              onChange: handlePhoneNumberChange,
            })}
            classNames={{
              inputWrapper:
                errors.phone &&
                "border-red-500 focus-within:border-red-500 hover:focus-within:border-red-500",
            }}
            endContent={
              <Tooltip
                content="In case we need to contact you about your order"
                showArrow={true}
                color="foreground"
                offset={12}
                classNames={{
                  content: "rounded-none p-4 text-xs max-w-[200px] text-center",
                }}
              >
                <span>
                  <RiQuestionLine
                    size={20}
                    className="-translate-y-2 text-neutral-400 cursor-pointer"
                  />
                </span>
              </Tooltip>
            }
          />
        </div>
      </div>
    </>
  );
}
