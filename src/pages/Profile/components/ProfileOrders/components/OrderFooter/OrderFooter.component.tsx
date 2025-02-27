import { shippingMethodPrice } from "../../../../../../config/config";
import { formatNumber } from "../../../../../../utils/formatNumber";
import { OrderFooterProps } from "./OrderFooter.types";

export default function OrderFooter({
  shippingMethod,
  totalPrice,
}: OrderFooterProps) {
  return (
    <div className="font-sans pt-6 border-t-1 border-neutral-300 mt-6">
      <div className="max-w-[420px] ml-auto">
        <div className="text-sm flex flex-col gap-2 pb-5">
          <div className="flex justify-between items-center">
            <span className="text-neutral-600 font-normal">Subtotal</span>
            <span className="text-neutral-600 font-normal">
              kr{" "}
              {formatNumber(totalPrice - shippingMethodPrice[shippingMethod])}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-600 font-normal">Shipping</span>
            <span className="text-neutral-600 font-normal">
              kr {formatNumber(shippingMethodPrice[shippingMethod])}
            </span>
          </div>
        </div>
        <div className="text-base font-medium flex justify-between items-center border-t-1 border-neutral-300 pt-4">
          <span>Total</span>
          <span className="font-semibold"> kr {formatNumber(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
}
