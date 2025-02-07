import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { RiQuestionLine } from "react-icons/ri";
import { Tooltip } from "@heroui/tooltip";
import { RadioGroup, Radio, RadioProps } from "@heroui/radio";
import { cn } from "../../utils/cn";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("1");
  return (
    <>
      <section className="grid grid-cols-[550px] lg:grid-cols-[1fr_520px] max-w-[1180px] mx-auto justify-center min-h-screen ">
        <div className="p-6 lg:order-1 order-2">
          <h1 className="text-xl font-semibold mb-4">NORDHEIM LOGO</h1>
          <form>
            <div>
              <h2>Contact</h2>
              <Input
                label="Email address"
                type="email"
                variant="faded"
                radius="none"
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
              />
            </div>

            <div>
              <h2>Delivery</h2>

              <Select
                label="Country/Region"
                radius="none"
                variant="faded"
                isInvalid={false}
                defaultSelectedKeys={["1"]}
                classNames={{
                  popoverContent: "rounded-none bg-neutral-50",
                  trigger: "py-5 bg-neutral-50",
                }}
              >
                <SelectItem
                  key={"1"}
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
                  isInvalid={false}
                />
                <Input
                  label="Last name"
                  type="text"
                  variant="faded"
                  radius="none"
                  className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                  isInvalid={false}
                />
              </div>
              <Input
                label="Company"
                type="text"
                variant="faded"
                radius="none"
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
              />
              <Input
                label="Address"
                type="text"
                variant="faded"
                radius="none"
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
              />
              <Input
                label="Apartment, suite, etc. (optional)"
                type="text"
                variant="faded"
                radius="none"
                className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                isInvalid={false}
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Postal code"
                  type="text"
                  variant="faded"
                  radius="none"
                  className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                  isInvalid={false}
                />
                <Input
                  label="City"
                  type="text"
                  variant="faded"
                  radius="none"
                  className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                  isInvalid={false}
                />
              </div>

              <Input
                label="Phone"
                type="text"
                variant="faded"
                radius="none"
                className=" [&_[data-slot='input-wrapper']]:bg-neutral-50"
                isInvalid={false}
                endContent={
                  <Tooltip
                    content="In case we need to contact you about your order"
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
            <div>
              <h2>Shipping method</h2>

              {/* TODO: QUITAR si el usuario escribe un shipping address */}
              <p className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                Enter your shipping address to view available shipping methods.
              </p>
              {/* TODO: ENSENYAR si el usuario escribe un shipping address */}
              <RadioGroup>
                <CustomRadio description="4 business days" value="economy">
                  <p className="flex justify-between items-center gap-2">
                    DHL Economy Select Home Delivery<span>kr 69.00</span>
                  </p>
                </CustomRadio>
                <CustomRadio description="2 business days" value="home">
                  <p className="flex justify-between items-center gap-2">
                    DHL Express Home Delivery<span>kr 159.00</span>
                  </p>
                </CustomRadio>
              </RadioGroup>
            </div>

            <div>
              <h2>Payment</h2>
              <p className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                All transactions are secure and ecrypted.
              </p>
              <RadioGroup
                value={selectedPayment}
                onValueChange={setSelectedPayment}
              >
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
                    startContent={
                      <Radio
                        value="1"
                        classNames={{
                          control: cn("bg-neutral-700"),
                          wrapper: cn(
                            "group-data-[selected=true]:border-neutral-700"
                          ),
                        }}
                      />
                    }
                    classNames={{
                      base: " bg-neutral-50 rounded-none",
                    }}
                  >
                    text
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Klarna - Flexible payments"
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
                      base: " bg-neutral-50 rounded-none mt-3",
                    }}
                  >
                    text
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="GooglePay/ApplePay"
                    title="GooglePay"
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
                      base: " bg-neutral-50 rounded-none mt-3",
                    }}
                  >
                    text
                  </AccordionItem>
                </Accordion>
              </RadioGroup>
            </div>
            <p className=" mt-6 text-xs font-sans font-normal text-neutral-600 underline underline-offset-4 cursor-pointer">
              Return to cart
            </p>
            <button
              type="submit"
              className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer mt-3 mb-16"
            >
              Pay now
            </button>
          </form>
        </div>
        <div className="bg-gray-200 p-6 lg:order-2 order-1">
          <h2 className="text-xl font-semibold mb-4">Columna 2</h2>

          <p>Contenido de la segunda columna...</p>
        </div>
      </section>
    </>
  );
}

interface CustomRadioProps extends RadioProps {
  children: React.ReactNode;
}

export const CustomRadio: React.FC<CustomRadioProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex max-w-[1000px] m-0 bg-content1 hover:border-gray-400/50 items-center bg-transparent",
          "cursor-pointer rounded-none gap-4 p-4 border-2 ",
          "data-[selected=true]:border-gray-400"
        ),
        label: cn("text-neutral-950 font-sans text-sm font-medium"),
        description: cn("text-neutral-500 font-sans text-xs font-medium"),
        labelWrapper: cn("w-full"),
        control: cn("bg-neutral-700"),
        wrapper: cn("group-data-[selected=true]:border-neutral-700"),
      }}
    >
      {children}
    </Radio>
  );
};
