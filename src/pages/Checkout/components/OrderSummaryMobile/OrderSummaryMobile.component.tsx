import { useCartStore } from "../../../../store/cartStore";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { formatNumber } from "../../../../utils/formatNumber";
import { shippingMethodPrice } from "../../../../config/config";
import { OrderSummaryMobileProps } from "./OrderSummaryMobile.types";

import ProductSummary from "../OrderSummary/ProductSummary/ProductSummary.component";
import SummaryMobileTitle from "./SummaryMobileTitle/SummaryMobileTitle.component";
import DiscountCode from "../OrderSummary/DiscountCode/DiscountCode.component";

export default function OrderSummaryMobile({
  summaryOpen,
  handleSummaryOpen,
  selectedShipping,
}: OrderSummaryMobileProps) {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <div className="max-w-[660px] w-full mr-auto flex lg:hidden mx-auto">
      <Accordion
        selectionMode="single"
        onSelectionChange={handleSummaryOpen}
        hideIndicator
      >
        <AccordionItem
          key="1"
          aria-label="Order summary"
          title={
            <SummaryMobileTitle
              summaryOpen={summaryOpen}
              selectedShipping={selectedShipping}
              totalPrice={totalPrice}
            />
          }
        >
          <div className="flex flex-col gap-5 mt-4">
            {cart.length > 0 &&
              cart.map((item) => <ProductSummary key={item.id} item={item} />)}

            {/* Discount code */}
            {!location.pathname.includes("success") && <DiscountCode />}

            {/* Summary details */}
            <div className="font-sans pt-6 border-t-1 border-neutral-300">
              <div className="text-sm flex flex-col gap-2 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Subtotal</span>
                  <span className="text-neutral-600 font-medium">
                    kr {formatNumber(totalPrice)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Shipping</span>
                  <span className="text-neutral-600 font-normal">
                    kr {formatNumber(shippingMethodPrice[selectedShipping])}
                  </span>
                </div>
              </div>
              <div className="text-base font-medium flex justify-between items-center border-t-1 border-neutral-300 pt-4">
                <span>Total</span>
                <span className="font-semibold">
                  kr{" "}
                  {formatNumber(
                    totalPrice + shippingMethodPrice[selectedShipping]
                  )}
                </span>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
