import { useCartStore } from "../../../../store/cartStore";
import ProductSummary from "./ProductSummary/ProductSummary.component";
import SummaryDetails from "./SummaryDetails/SummaryDetails.component";

export default function OrderSummary() {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="max-w-[520px] w-full mr-auto flex-col gap-5 hidden lg:flex">
      {cart.length > 0 &&
        cart.map((item) => <ProductSummary key={item.id} item={item} />)}

      <SummaryDetails />
    </div>
  );
}
