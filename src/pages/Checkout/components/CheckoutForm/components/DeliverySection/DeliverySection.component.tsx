import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { Select, SelectItem } from "@heroui/select";
import { RiQuestionLine } from "react-icons/ri";
import { cn } from "../../../../../../utils/cn";
import { errorInputStyles, inputStyle } from "../../CheckoutForm.styles";
import { DeliverySectionProps } from "./DeliverySection.types";
import { useHandlePhoneNumber } from "../../../../../../hooks/checkout/inputHandlers/useHandlePhoneNumber";

export default function DeliverySection({
  register,
  errors,
}: DeliverySectionProps) {
  const { phoneNumber, handlePhoneNumberChange } = useHandlePhoneNumber();
  return (
    <>
      <div>
        <h2 className="text-lg font-sans font-medium mb-3">Delivery</h2>

        <div className="flex flex-col gap-3">
          {/* Country */}
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
                errors.country && errorInputStyles
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

          {/* First name */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First name"
              type="text"
              variant="faded"
              radius="none"
              className={inputStyle}
              isInvalid={Boolean(errors.firstName)}
              errorMessage={errors.firstName?.message}
              {...register("firstName")}
              classNames={{
                inputWrapper: errors.firstName && errorInputStyles,
              }}
            />

            {/* Last name */}
            <Input
              label="Last name"
              type="text"
              variant="faded"
              radius="none"
              className={inputStyle}
              isInvalid={Boolean(errors.lastName)}
              errorMessage={errors.lastName?.message}
              {...register("lastName")}
              classNames={{
                inputWrapper: errors.lastName && errorInputStyles,
              }}
            />
          </div>

          {/* Company */}
          <Input
            label="Company (optional)"
            type="text"
            variant="faded"
            radius="none"
            className={inputStyle}
            isInvalid={Boolean(errors.company)}
            errorMessage={errors.company?.message}
            {...register("company")}
            classNames={{
              inputWrapper: errors.company && errorInputStyles,
            }}
          />

          {/* Address */}
          <Input
            label="Address"
            type="text"
            variant="faded"
            radius="none"
            className={inputStyle}
            isInvalid={Boolean(errors.address)}
            errorMessage={errors.address?.message}
            {...register("address")}
            classNames={{
              inputWrapper: errors.address && errorInputStyles,
            }}
          />

          {/* Apartment */}
          <Input
            label="Apartment, suite, etc. (optional)"
            type="text"
            variant="faded"
            radius="none"
            className={inputStyle}
            isInvalid={Boolean(errors.apartment)}
            errorMessage={errors.apartment?.message}
            {...register("apartment")}
            classNames={{
              inputWrapper: errors.apartment && errorInputStyles,
            }}
          />

          {/* Postal code */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Postal code"
              type="text"
              variant="faded"
              radius="none"
              className={inputStyle}
              isInvalid={Boolean(errors.postalCode)}
              errorMessage={errors.postalCode?.message}
              {...register("postalCode")}
              classNames={{
                inputWrapper: errors.postalCode && errorInputStyles,
              }}
            />

            {/* City */}
            <Input
              label="City"
              type="text"
              variant="faded"
              radius="none"
              className={inputStyle}
              isInvalid={Boolean(errors.city)}
              errorMessage={errors.city?.message}
              {...register("city")}
              classNames={{
                inputWrapper: errors.city && errorInputStyles,
              }}
            />
          </div>

          {/* Phone */}
          <Input
            label="Phone"
            type="text"
            variant="faded"
            radius="none"
            className={inputStyle}
            isInvalid={Boolean(errors.phone)}
            errorMessage={errors.phone?.message}
            value={phoneNumber}
            {...register("phone", {
              onChange: handlePhoneNumberChange,
            })}
            classNames={{
              inputWrapper: errors.phone && errorInputStyles,
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
