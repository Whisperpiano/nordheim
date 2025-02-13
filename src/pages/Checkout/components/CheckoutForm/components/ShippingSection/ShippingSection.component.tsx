import { cn } from "../../../../../../utils/cn";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Radio, RadioGroup } from "@heroui/radio";
import { Input } from "@heroui/input";
import { RiLockLine, RiQuestionLine } from "react-icons/ri";
import { Tooltip } from "@heroui/tooltip";
import { PaymentSectionProps } from "./ShippingSection.types";

export default function ShippingSection({
  selectedPayment,
  setSelectedPayment,
}: PaymentSectionProps) {
  return (
    <>
      <h2 className="text-lg font-sans font-medium mb-3 px-2">Payment</h2>
      <div className="flex flex-col gap-3">
        <p className="mx-2 p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
          All transactions are secure and ecrypted.
        </p>
        <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
          <Accordion
            variant="splitted"
            selectedKeys={[selectedPayment]}
            onSelectionChange={(keys) => {
              const keyArray = Array.from(keys) as string[];
              if (keyArray.length > 0) {
                setSelectedPayment(keyArray[0]);
              }
            }}
          >
            <AccordionItem
              key="1"
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
                    selectedPayment === "1"
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
                  value="1"
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
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
                endContent={
                  <RiLockLine
                    size={20}
                    className="-translate-y-2 text-neutral-400 cursor-pointer"
                  />
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Expiration date (MM / YY)"
                  type="text"
                  variant="faded"
                  radius="none"
                  className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                  isInvalid={false}
                />
                <Input
                  label="Security code"
                  type="text"
                  variant="faded"
                  radius="none"
                  className=" [&_[data-slot='input-wrapper']]:bg-neutral-50"
                  isInvalid={false}
                  endContent={
                    <Tooltip
                      content="3-digit security code usually found on the back of your card."
                      showArrow={true}
                      color="foreground"
                      offset={12}
                      classNames={{
                        content:
                          "rounded-none p-4 text-xs max-w-[200px] text-center",
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
              <Input
                label="Name on card"
                type="text"
                variant="faded"
                radius="none"
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
              />
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Klarna - Flexible payments"
              indicator={
                <span>
                  <img src="/Klarna.svg" alt="Klarna" />
                </span>
              }
              startContent={
                <Radio
                  value="2"
                  classNames={{
                    control: cn("bg-neutral-700"),
                    wrapper: cn(
                      "group-data-[selected=true]:border-neutral-700"
                    ),
                  }}
                />
              }
              title="Klarna - Flexible payments"
              classNames={{
                base: cn(
                  `bg-neutral-50 rounded-none shadow-none border-2 px-0 ${
                    selectedPayment === "2"
                      ? "border-neutral-400"
                      : "border-gray-200"
                  }`
                ),
                title: cn("text-neutral-950 font-sans text-sm font-medium"),
                heading: cn("px-4"),
                content: cn("p-8 bg-gray-200/50"),
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
              <p className=" text-neutral-900 font-sans text-sm font-light max-w-[350px] text-center mx-auto">
                After clicking “Pay now”, you will be redirected to Klarna -
                Flexible payments to complete your purchase securely.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="GooglePay/ApplePay"
              title="GooglePay"
              indicator={
                <span>
                  <img src="/GooglePay.svg" alt="GooglePay" />
                </span>
              }
              startContent={
                <Radio
                  value="3"
                  classNames={{
                    control: cn("bg-neutral-700"),
                    wrapper: cn(
                      "group-data-[selected=true]:border-neutral-700"
                    ),
                  }}
                />
              }
              classNames={{
                base: cn(
                  `bg-neutral-50 rounded-none shadow-none border-2 px-0 ${
                    selectedPayment === "3"
                      ? "border-neutral-400"
                      : "border-gray-200"
                  }`
                ),
                title: cn("text-neutral-950 font-sans text-sm font-medium"),
                heading: cn("px-4"),
                content: cn("p-8 bg-gray-200/50 "),
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
              <p className=" text-neutral-900 font-sans text-sm font-light max-w-[350px] text-center mx-auto">
                After clicking “Pay now”, you will be redirected to GooglePay
                payments to complete your purchase securely.
              </p>
            </AccordionItem>
          </Accordion>
        </RadioGroup>
      </div>
    </>
  );
}
