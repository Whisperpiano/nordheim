import { Accordion, AccordionItem } from "@heroui/accordion";
import { SharedSelection } from "@heroui/system";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import ProductSummary from "../OrderSummary/ProductSummary/ProductSummary.component";
import SummaryDetails from "../OrderSummary/SummaryDetails/SummaryDetails.component";

export default function OrderSummaryMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(keys: SharedSelection) {
    if (keys instanceof Set) {
      setIsOpen(keys.size > 0);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className="max-w-[660px] w-full mr-auto flex lg:hidden mx-auto">
      <Accordion
        selectionMode="single"
        onSelectionChange={handleOpen}
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
                    isOpen ? "rotate-180" : ""
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
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductSummary key={i} />
            ))}

            <SummaryDetails />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
