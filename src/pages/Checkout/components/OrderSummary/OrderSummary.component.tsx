import ProductSummary from "./ProductSummary/ProductSummary.component";
import SummaryDetails from "./SummaryDetails/SummaryDetails.component";

export default function OrderSummary() {
  return (
    <div className="max-w-[520px] w-full mr-auto flex-col gap-5 hidden lg:flex">
      {Array.from({ length: 4 }).map((_, i) => (
        <ProductSummary key={i} />
      ))}

      <SummaryDetails />
    </div>
  );
}
