import { useLocation } from "react-router";
import { useCartStore } from "../../../../store/cartStore";
import { SelectedShipping } from "../../Checkout.page";
import { formatNumber } from "../../../../utils/formatNumber";
import { shippingMethodPrice } from "../../../../config/config";

import ProductSummary from "./ProductSummary/ProductSummary.component";
import DiscountCode from "./DiscountCode/DiscountCode.component";

export default function OrderSummary({
  selectedShipping,
}: {
  selectedShipping: SelectedShipping;
}) {
  const cart = useCartStore((state) => state.cart);
  const location = useLocation();

  const totalPrice = useCartStore((state) => state.totalPrice);
  return (
    <div className="max-w-[520px] w-full mr-auto flex-col gap-5 hidden lg:flex">
      {/* Cart items  */}
      {cart.map((item) => (
        <ProductSummary key={item.id} item={item} />
      ))}

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
            {formatNumber(totalPrice + shippingMethodPrice[selectedShipping])}
          </span>
        </div>
      </div>
    </div>
  );
}
