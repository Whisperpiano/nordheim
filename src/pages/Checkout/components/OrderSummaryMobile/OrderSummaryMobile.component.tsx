import { Accordion, AccordionItem } from "@heroui/accordion";

import { RiArrowDownSLine } from "react-icons/ri";
import ProductSummary from "../OrderSummary/ProductSummary/ProductSummary.component";
import SummaryDetails from "../OrderSummary/SummaryDetails/SummaryDetails.component";
import { SharedSelection } from "@heroui/system";
import { useCartStore } from "../../../../store/cartStore";

export interface OrderSummaryMobileProps {
  summaryOpen: boolean;
  handleSummaryOpen: (keys: SharedSelection) => void;
  selectedShipping: "economy" | "home" | null;
}

export default function OrderSummaryMobile({
  summaryOpen,
  handleSummaryOpen,
  selectedShipping,
}: OrderSummaryMobileProps) {
  const cart = useCartStore((state) => state.cart);
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
            <div className="flex justify-between items-center text-sm font-sans">
              <span
                className={`text-neutral-950 font-medium flex items-center gap-1`}
              >
                Order summary
                <span
                  className={`transition-transform duration-300 ${
                    summaryOpen ? "rotate-180" : ""
                  }`}
                >
                  <RiArrowDownSLine size={16} />
                </span>
              </span>
              <span className="font-semibold "> kr 15,500.00</span>
            </div>
          }
        >
          <div className="flex flex-col gap-5 mt-4">
            {cart.length > 0 &&
              cart.map((item) => <ProductSummary key={item.id} item={item} />)}

            <SummaryDetails selectedShipping={selectedShipping} />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
