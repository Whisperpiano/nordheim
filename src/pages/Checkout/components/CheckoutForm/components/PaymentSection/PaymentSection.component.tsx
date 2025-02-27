import { Accordion, AccordionItem } from "@heroui/accordion";
import { Radio, RadioGroup } from "@heroui/radio";
import { Input } from "@heroui/input";
import { Controller } from "react-hook-form";
import { cn } from "../../../../../../utils/cn";
import { PaymentSectionProps } from "./PaymentSection.types";
import { useHandleCardNumber } from "../../../../../../hooks/checkout/inputHandlers/useHandleCardNumber";
import { useHandleCardExpiration } from "../../../../../../hooks/checkout/inputHandlers/useHandleCardExpiration";
import { useHandleCardSecurityCode } from "../../../../../../hooks/checkout/inputHandlers/useHandleCardSecurityCode";

export default function PaymentSection({
  register,
  control,
  errors,
}: PaymentSectionProps) {
  const { cardNumber, handleCardNumber } = useHandleCardNumber();
  const { cardExpiration, handleCardExpiration } = useHandleCardExpiration();
  const { cardSecurityCode, handleCardSecurityCode } =
    useHandleCardSecurityCode();

  return (
    <>
      <h2 className="text-lg font-sans font-medium mb-3 px-2">Payment</h2>
      <div className="flex flex-col gap-3">
        <p className="mx-2 p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
          All transactions are secure and encrypted.
        </p>

        <Controller
          name="payment"
          defaultValue="klarna"
          control={control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              <Accordion
                variant="splitted"
                selectedKeys={[field.value]}
                onSelectionChange={(keys) => {
                  const keyArray = Array.from(keys) as string[];
                  if (keyArray.length > 0) {
                    field.onChange(keyArray[0]);
                  }
                }}
              >
                {/* Klarna */}
                <AccordionItem
                  key="klarna"
                  aria-label="Klarna - Flexible payments"
                  title="Klarna - Flexible payments"
                  indicator={<img src="/Klarna.svg" alt="Klarna" />}
                  startContent={
                    <Radio
                      value="klarna"
                      classNames={{
                        control: cn("bg-neutral-700"),
                        wrapper: cn(
                          "group-data-[selected=true]:border-neutral-700"
                        ),
                        base: cn("shadow-none"),
                      }}
                    />
                  }
                  classNames={{
                    base: cn(
                      `bg-neutral-50 rounded-none shadow-none border-2 px-0 ${
                        field.value === "klarna"
                          ? "border-neutral-400"
                          : "border-gray-200"
                      }`
                    ),
                    title: cn("text-neutral-950 font-sans text-sm font-medium"),
                    heading: cn("px-4"),
                    content: cn("p-3 bg-gray-200/50 flex flex-col gap-3"),
                    indicator: cn(
                      "transition-transform rotate-0 data-[open=true]:-rotate-0 rtl:rotate-0 rtl:data-[open=true]:-rotate-0"
                    ),
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 16 16"
                    className="mx-auto mb-3"
                  >
                    <path
                      fill="#707070"
                      d="M11 10L8.1 6.8L4.8 10H7v1.8c0 1.7-.9 4.2-4 4.2c4.8 0 6-1.4 6-4.3V10z"
                    />
                    <path
                      fill="#707070"
                      d="M0 0v13h6v-1H1V3h14v9h-5v1h6V0zm2 2H1V1h1zm11 0H3V1h10z"
                    />
                  </svg>
                  <p className="text-neutral-900 font-sans text-sm font-light max-w-[350px] text-center mx-auto">
                    After clicking “Pay now”, you will be redirected to Klarna
                    to complete your purchase securely.
                  </p>
                </AccordionItem>

                {/* GooglePay */}
                <AccordionItem
                  key="googlepay"
                  aria-label="GooglePay/ApplePay"
                  title="GooglePay"
                  indicator={<img src="/GooglePay.svg" alt="GooglePay" />}
                  startContent={
                    <Radio
                      value="googlepay"
                      classNames={{
                        control: cn("bg-neutral-700"),
                        wrapper: cn(
                          "group-data-[selected=true]:border-neutral-700"
                        ),
                        base: cn("shadow-none"),
                      }}
                    />
                  }
                  classNames={{
                    base: cn(
                      `bg-neutral-50 rounded-none shadow-none border-2 px-0 ${
                        field.value === "googlepay"
                          ? "border-neutral-400"
                          : "border-gray-200"
                      }`
                    ),
                    title: cn("text-neutral-950 font-sans text-sm font-medium"),
                    heading: cn("px-4"),
                    content: cn("p-3 bg-gray-200/50 flex flex-col gap-3"),
                    indicator: cn(
                      "transition-transform rotate-0 data-[open=true]:-rotate-0 rtl:rotate-0 rtl:data-[open=true]:-rotate-0"
                    ),
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 16 16"
                    className="mx-auto mb-3"
                  >
                    <path
                      fill="#707070"
                      d="M11 10L8.1 6.8L4.8 10H7v1.8c0 1.7-.9 4.2-4 4.2c4.8 0 6-1.4 6-4.3V10z"
                    />
                    <path
                      fill="#707070"
                      d="M0 0v13h6v-1H1V3h14v9h-5v1h6V0zm2 2H1V1h1zm11 0H3V1h10z"
                    />
                  </svg>
                  <p className="text-neutral-900 font-sans text-sm font-light max-w-[350px] text-center mx-auto">
                    After clicking “Pay now”, you will be redirected to
                    GooglePay to complete your purchase securely.
                  </p>
                </AccordionItem>

                {/* Card */}
                <AccordionItem
                  key="card"
                  aria-label="Credit card"
                  title="Credit card"
                  indicator={
                    <div className="flex gap-2 items-center">
                      <span className="flex items-center">
                        <img src="/Visa.svg" alt="Credit card" />
                      </span>
                      <span className="flex items-center">
                        <img src="/Mastercard.svg" alt="Mastercard" />
                      </span>
                      <span className="flex items-center">
                        <img src="/PayPal.svg" alt="PayPal" />
                      </span>
                    </div>
                  }
                  classNames={{
                    base: cn(
                      `bg-neutral-50 rounded-none shadow-none border-2 px-0 ${
                        field.value === "card"
                          ? "border-neutral-400"
                          : "border-gray-200"
                      }`
                    ),
                    title: cn("text-neutral-950 font-sans text-sm font-medium"),
                    heading: cn("px-4"),
                    content: cn("p-3 bg-gray-200/50 flex flex-col gap-3"),
                    indicator: cn(
                      "transition-transform rotate-0 data-[open=true]:-rotate-0 rtl:rotate-0 rtl:data-[open=true]:-rotate-0"
                    ),
                  }}
                  startContent={
                    <Radio
                      value="card"
                      classNames={{
                        control: cn("bg-neutral-700"),
                        wrapper: cn(
                          "group-data-[selected=true]:border-neutral-700"
                        ),
                        base: cn("shadow-none"),
                      }}
                    />
                  }
                >
                  <Input
                    label="Card number"
                    type="text"
                    variant="faded"
                    radius="none"
                    maxLength={19}
                    value={cardNumber}
                    required={field.value === "card"}
                    {...register("cardNumber", {
                      onChange: handleCardNumber,
                    })}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="Expiration date (MM / YY)"
                      type="text"
                      variant="faded"
                      radius="none"
                      value={cardExpiration}
                      required={field.value === "card"}
                      onChange={handleCardExpiration}
                    />
                    <Input
                      label="Security code"
                      type="text"
                      variant="faded"
                      radius="none"
                      value={cardSecurityCode}
                      onChange={handleCardSecurityCode}
                      required={field.value === "card"}
                    />
                  </div>
                  <Input
                    label="Name on card"
                    type="text"
                    variant="faded"
                    radius="none"
                    required={field.value === "card"}
                  />
                </AccordionItem>
              </Accordion>
            </RadioGroup>
          )}
        />

        {errors.payment && (
          <p className="text-red-500 text-sm mt-1">{errors.payment.message}</p>
        )}
      </div>
    </>
  );
}
