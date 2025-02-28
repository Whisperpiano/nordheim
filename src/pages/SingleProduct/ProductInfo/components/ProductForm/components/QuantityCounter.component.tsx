import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { QuantityCounterProps } from "./QuantityCounter.types";

export default function QuantityCounter({
  quantity,
  stock,
  handleDecrement,
  handleIncrement,
}: QuantityCounterProps) {
  return (
    <div className="mt-4">
      <div>
        <span className="text-xs font-sans">
          <strong>Quantity:</strong>
        </span>
      </div>
      <div className="border border-neutral-300 inline-flex mt-2">
        <button
          type="button"
          className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-950 transition-colors duration-300 disabled:text-gray-300 disabled:cursor-not-allowed"
          onClick={handleDecrement}
          disabled={stock <= 0}
        >
          <RiSubtractLine />
        </button>
        <span
          className={`px-3.5 py-3 text-sm font-normal ${
            stock <= 0 ? "text-neutral-300" : "text-neutral-950"
          }`}
        >
          {quantity}
        </span>
        <button
          type="button"
          className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-950 transition-colors duration-300 disabled:text-gray-300 disabled:cursor-not-allowed"
          onClick={handleIncrement}
          disabled={stock <= 0}
        >
          <RiAddLine />
        </button>
      </div>
    </div>
  );
}
