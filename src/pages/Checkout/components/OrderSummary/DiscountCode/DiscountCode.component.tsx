import { Input } from "@heroui/input";
import { useDiscountCode } from "../../../../../hooks/checkout/useDiscountCode";

export default function DiscountCode() {
  const { discountCode, setDiscountCode, handleClick } = useDiscountCode();

  return (
    <div className="flex gap-3 items-stretch pt-6 border-t-1 border-neutral-300">
      <Input
        type="text"
        variant="faded"
        placeholder="Discount code or gift card "
        radius="none"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        className={
          " [&_[data-slot='input-wrapper']]:bg-neutral-50 [&_[data-slot='input-wrapper']]:border-gray-300 "
        }
        isInvalid={false}
      />
      <button
        type="button"
        className="text-xs font-condensed font-normal text-neutral-600 cursor-pointer border-1 border-gray-300 uppercase px-6 hover:bg-neutral-950 hover:text-neutral-50 transition-colors"
        onClick={handleClick}
      >
        Apply
      </button>
    </div>
  );
}
