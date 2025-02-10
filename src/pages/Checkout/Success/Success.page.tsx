import { RiCheckboxCircleLine } from "react-icons/ri";
import Logo from "../../../components/Logo/Logo.component";
import { Link } from "react-router";

export default function CheckoutSuccess() {
  return (
    <>
      <section className="grid grid-cols-[55%_45%] min-h-screen ">
        <div className=" p-8">
          <div className="max-w-[660px] ml-auto h-full flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <Logo width={192} theme="dark" />
              </div>
              <div className="flex items-center gap-1.5 mb-8">
                <RiCheckboxCircleLine size={26} className="text-green-700" />
                <h1 className="text-xl font-semibold text-neutral-800">
                  Thank you John!
                </h1>
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                  <h2 className="text-base font-medium text-neutral-600 mb-2">
                    Your order is confirmed
                  </h2>
                  <p>
                    You’ll recieve a confirmation email with your order details
                    shortly.
                  </p>
                </div>

                <div className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                  <h2 className="text-base font-medium text-neutral-600 mb-2">
                    Order updates
                  </h2>
                  <p>You’ll get shipping and delivery updates by email.</p>
                </div>

                <article className="p-5 border-2 border-neutral-200">
                  <h2 className="text-base font-medium text-neutral-600 mb-6">
                    Customer information
                  </h2>
                  <div className="flex gap-6 text-sm font-light text-neutral-700 font-sans">
                    <div className="flex-1 flex flex-col gap-5">
                      <div className="flex flex-col">
                        <h3 className="font-medium mb-1">
                          Contact information
                        </h3>
                        <span>darnassusrules@gmail.com</span>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-medium mb-1">Shipping address</h3>
                        <span>John Doe</span>
                        <span>1601 E 84th Ave #201</span>
                        <span>Anchorage AL 35242</span>
                        <span>United States</span>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-medium mb-1">Shipping method</h3>
                        <span>DHL Economy Select Home Delivery</span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-5">
                      <div>
                        <h3 className="font-medium mb-1">Payment method</h3>
                        <div className="flex items-center gap-1.5">
                          <img
                            src="/Mastercard.svg"
                            alt="Mastercard"
                            className="w-6 h-6"
                          />
                          <span>ending with 4444</span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-medium mb-1">Billing address</h3>
                        <span>John Doe</span>
                        <span>1601 E 84th Ave #201</span>
                        <span>Anchorage AL 35242</span>
                        <span>United States</span>
                      </div>
                    </div>
                  </div>
                </article>

                <Link
                  to="/"
                  className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
                >
                  Continue shopping
                </Link>
              </div>
            </div>
            <footer className="text-xs text-neutral-500 font-condensed font-normal border-t-2 border-neutral-200 pt-6">
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

            <div className="font-sans border-t-2 border-neutral-300 pt-4">
              <div className="text-sm flex flex-col gap-2 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Subtotal</span>
                  <span className="text-neutral-600 font-medium">
                    kr 14,396.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Shipping</span>
                  <span className="text-neutral-600 font-medium">kr 69.00</span>
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
