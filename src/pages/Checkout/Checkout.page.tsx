import LogoHeader from "../../layout/components/Header/LogoHeader/LogoHeader.component";
import OrderSummary from "./components/OrderSummary/OrderSummary.component";
import OrderSummaryMobile from "./components/OrderSummaryMobile/OrderSummaryMobile.component";
import { SharedSelection } from "@heroui/system";
import { useState } from "react";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm.component";

export default function Checkout() {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState<
    "economy" | "home" | null
  >(null);

  function handleSummaryOpen(keys: SharedSelection) {
    if (keys instanceof Set) {
      setSummaryOpen(keys.size > 0);
    } else {
      setSummaryOpen(false);
    }
  }
  console.log(selectedShipping);
  return (
    <>
      <section className="grid lg:grid-cols-[55%_45%] lg:min-h-screen">
        <div className=" p-8 order-2 lg:order-1 flex justify-center lg:justify-end">
          <div className="max-w-[660px] w-full ">
            <LogoHeader />
            <CheckoutForm
              setSelectedShipping={setSelectedShipping}
              selectedShipping={selectedShipping}
            />
            <footer className="text-xs text-neutral-500 font-condensed font-normal mt-10 border-t-2 border-neutral-200 pt-6">
              2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>

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
