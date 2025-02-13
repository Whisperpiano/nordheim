import { Input } from "@heroui/input";
import { useLocation } from "react-router";

export default function SummaryDetails() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("success") && (
        <div className="flex gap-3 items-stretch pt-6 border-t-1 border-neutral-300">
          <Input
            type="text"
            variant="faded"
            placeholder="Discount code or gift card "
            radius="none"
            className={
              " [&_[data-slot='input-wrapper']]:bg-neutral-50 [&_[data-slot='input-wrapper']]:border-gray-300 "
            }
            isInvalid={false}
          />
          <button
            type="button"
            className="text-xs font-condensed font-normal text-neutral-600 cursor-pointer border-1 border-gray-300 uppercase px-6 hover:bg-neutral-950 hover:text-neutral-50 transition-colors"
          >
            Apply
          </button>
        </div>
      )}
      <div className="font-sans pt-6 border-t-1 border-neutral-300">
        <div className="text-sm flex flex-col gap-2 pb-5">
          <div className="flex justify-between items-center">
            <span className="text-neutral-950 font-medium">Subtotal</span>
            <span className="text-neutral-600 font-medium">kr 14,396.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-950 font-medium">Shipping</span>
            <span className="text-neutral-600 font-normal">
              Enter shipping address
            </span>
          </div>
        </div>
        <div className="text-base font-medium flex justify-between items-center border-t-1 border-neutral-300 pt-4">
          <span>Total</span>
          <span className="font-semibold"> kr 15,500.00</span>
        </div>
      </div>
    </>
  );
}
