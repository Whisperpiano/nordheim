import { RiArrowDownSLine } from "react-icons/ri";

import { formatNumber } from "../../../../../utils/formatNumber";
import { shippingMethodPrice } from "../../../../../config/config";
import { SummaryMobileProps } from "./SummaryMobileTitle.types";

export default function SummaryMobileTitle({
  selectedShipping,
  totalPrice,
}: SummaryMobileProps) {
  return (
    <div className="flex justify-between items-center text-sm font-sans">
      <span className={`text-neutral-950 font-medium flex items-center gap-1`}>
        Order summary
        <span className={`transition-transform duration-300 rotate-180`}>
          <RiArrowDownSLine size={16} />
        </span>
      </span>
      <span className="font-semibold ">
        kr {formatNumber(totalPrice + shippingMethodPrice[selectedShipping])}
      </span>
    </div>
  );
}
