import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useOpenSummary } from "../../hooks/checkout/useOpenSummary";
import { useModalStore } from "../../store/modalStore";

import OrderSummary from "./components/OrderSummary/OrderSummary.component";
import OrderSummaryMobile from "./components/OrderSummaryMobile/OrderSummaryMobile.component";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm.component";
import Logo from "../../components/Logo/Logo.component";

export type SelectedShipping = "economy" | "home";

export default function Checkout() {
  const [selectedShipping, setSelectedShipping] =
    useState<SelectedShipping>("economy");

  const { summaryOpen, handleSummaryOpen } = useOpenSummary();

  const setCartOpen = useModalStore((state) => state.setCartOpen);

  // Close cart because of route change, and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setCartOpen(false);
  }, [setCartOpen]);

  return (
    <>
      <section className="grid lg:grid-cols-[55%_45%] lg:min-h-screen">
        {/* Form section */}
        <div className=" p-8 order-2 lg:order-1 flex justify-center lg:justify-end">
          <div className="max-w-[660px] w-full ">
            {/* Header */}
            <h1>
              <Link to="/">
                <span className="sr-only">Nordheim</span>
                <Logo theme="dark" />
              </Link>
            </h1>

            {/* Form */}
            <CheckoutForm
              setSelectedShipping={setSelectedShipping}
              selectedShipping={selectedShipping}
            />

            {/* Footer */}
            <footer className="text-xs text-neutral-500 font-condensed font-normal mt-10 border-t-2 border-neutral-200 pt-6">
              2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>

        {/* Summary section*/}
        <div className=" bg-gray-200/50 p-8 max-h-screen flex lg:sticky top-0 z-50 order-1 lg:order-2 lg:border-none border-b border-neutral-300">
          <OrderSummary selectedShipping={selectedShipping} />
          <OrderSummaryMobile
            selectedShipping={selectedShipping}
            summaryOpen={summaryOpen}
            handleSummaryOpen={handleSummaryOpen}
          />
        </div>
      </section>
    </>
  );
}
