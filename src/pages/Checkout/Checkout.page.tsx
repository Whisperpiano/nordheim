import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { RiArrowLeftLine, RiLockLine, RiQuestionLine } from "react-icons/ri";
import { Tooltip } from "@heroui/tooltip";
import { RadioGroup, Radio, RadioProps } from "@heroui/radio";
import { cn } from "../../utils/cn";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";
import Logo from "../../components/Logo/Logo.component";
import { Link } from "react-router";

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("1");
  const [hasAddress, setHasAddress] = useState(true);

  console.log(setHasAddress);
  console.log(selectedPayment);

  return (
    <>
      <section className="grid grid-cols-[55%_45%] min-h-screen ">
        <div className=" p-8">
          <div className="max-w-[660px] ml-auto">
            <h1 className="hidden ">Nordheim checkout</h1>
            <div className="mb-8">
              <Logo width={192} theme="dark" />
            </div>

            <form className="flex flex-col gap-8">
              <div className="px-2">
                <h2 className="text-lg font-sans font-medium mb-3">Contact</h2>
                <Input
                  label="Email address"
                  type="email"
                  variant="faded"
                  radius="none"
                  className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
                  isInvalid={false}
                />
              </div>

              <div className="px-2">
                <h2 className="text-lg font-sans font-medium mb-3">Delivery</h2>

                <div className="flex flex-col gap-3">
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
                      className={
                        " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                      }
                      isInvalid={false}
                    />
                    <Input
                      label="Last name"
                      type="text"
                      variant="faded"
                      radius="none"
                      className={
                        " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                      }
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
                      className={
                        " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                      }
                      isInvalid={false}
                    />
                    <Input
                      label="City"
                      type="text"
                      variant="faded"
                      radius="none"
                      className={
                        " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                      }
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
              </div>

              <div className="px-2">
                <h2 className="text-lg font-sans font-medium mb-3">
                  Shipping method
                </h2>

                {hasAddress ? (
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
                ) : (
                  <p className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                    Enter your shipping address to view available shipping
                    methods.
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-lg font-sans font-medium mb-3 px-2">
                  Payment
                </h2>
                <div className="flex flex-col gap-3">
                  <p className="mx-2 p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
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
                          title: cn(
                            "text-neutral-950 font-sans text-sm font-medium"
                          ),
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
                          className={
                            " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                          }
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
                            className={
                              " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                            }
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
                          className={
                            " [&_[data-slot='input-wrapper']]:bg-neutral-50"
                          }
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
                          title: cn(
                            "text-neutral-950 font-sans text-sm font-medium"
                          ),
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
                          After clicking “Pay now”, you will be redirected to
                          Klarna - Flexible payments to complete your purchase
                          securely.
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
                          title: cn(
                            "text-neutral-950 font-sans text-sm font-medium"
                          ),
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
                          After clicking “Pay now”, you will be redirected to
                          GooglePay payments to complete your purchase securely.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </RadioGroup>
                </div>
              </div>
              <p className="text-xs font-sans font-medium text-neutral-600 underline underline-offset-4 cursor-pointer flex items-center gap-1 px-2">
                <span>
                  <RiArrowLeftLine className="text-neutral-600" size={16} />
                </span>
                Return to cart
              </p>
              <div className="px-2">
                <Link
                  to="/checkout/success"
                  className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer  mb-6"
                >
                  Pay now
                </Link>
              </div>
            </form>
            <footer className="text-xs text-neutral-500 font-condensed font-normal mt-10 border-t-2 border-neutral-200 pt-6">
              2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>

        <div className=" bg-gray-200/50 p-8  max-h-screen sticky top-0 z-50">
          <div className="max-w-[520px] w-full mr-auto flex-col gap-5 flex">
            <article className="flex gap-4 items-center">
              <div className="relative inline-flex">
                <img
                  src="/city.jpg"
                  alt="City"
                  className="aspect-square w-[64px] object-cover"
                />
                <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
                  1
                </span>
              </div>
              <section className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 text-sm font-medium font-condensed">
                    Huger Backpack
                  </span>
                  <span className="text-neutral-500 text-sm font-medium font-condensed">
                    2995 kr
                  </span>
                </div>
                <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                  S / Grey
                </span>
              </section>
            </article>

            <article className="flex gap-4 items-center">
              <div className="relative inline-flex">
                <img
                  src="/city.jpg"
                  alt="City"
                  className="aspect-square w-[64px] object-cover"
                />
                <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
                  1
                </span>
              </div>
              <section className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 text-sm font-medium font-condensed">
                    Huger Backpack
                  </span>
                  <span className="text-neutral-500 text-sm font-medium font-condensed">
                    2995 kr
                  </span>
                </div>
                <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                  S / Grey
                </span>
              </section>
            </article>

            <article className="flex gap-4 items-center">
              <div className="relative inline-flex">
                <img
                  src="/city.jpg"
                  alt="City"
                  className="aspect-square w-[64px] object-cover"
                />
                <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
                  1
                </span>
              </div>
              <section className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 text-sm font-medium font-condensed">
                    Huger Backpack
                  </span>
                  <span className="text-neutral-500 text-sm font-medium font-condensed">
                    2995 kr
                  </span>
                </div>
                <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                  S / Grey
                </span>
              </section>
            </article>

            <div className="flex gap-3 items-stretch py-6 border-y-2 border-neutral-300">
              <Input
                type="text"
                variant="faded"
                placeholder="Discount code or gift card "
                radius="none"
                className={
                  " [&_[data-slot='input-wrapper']]:bg-neutral-50 [&_[data-slot='input-wrapper']]:border-gray-300 "
                }
                isInvalid={false}
              />
              <button
                type="button"
                className="text-xs font-condensed font-normal text-neutral-600 cursor-pointer border-2 border-gray-300 uppercase px-6 hover:bg-neutral-950 hover:text-neutral-50 transition-colors"
              >
                Apply
              </button>
            </div>

            <div className="font-sans">
              <div className="text-sm flex flex-col gap-2 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Subtotal</span>
                  <span className="text-neutral-600 font-medium">
                    kr 14,396.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Shipping</span>
                  <span className="text-neutral-600 font-normal">
                    Enter shipping address
                  </span>
                </div>
              </div>
              <div className="text-base font-medium flex justify-between items-center border-t-2 border-neutral-300 pt-4">
                <span>Total</span>
                <span className="font-semibold"> kr 15,500.00</span>
              </div>
            </div>
          </div>
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
