import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import Button from "../../../../../components/Button/Button.component";

export default function ProductForm() {
  return (
    <>
      <div className="mt-4">
        <div>
          <span className="text-xs font-sans">
            <strong>Quantity:</strong>
          </span>
        </div>
        <div className="border border-neutral-300 inline-flex mt-2">
          <button className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-300">
            <RiSubtractLine />
          </button>
          <span className="px-3.5 py-3 text-sm font-normal">1</span>
          <button className="px-3.5 py-3 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-300">
            <RiAddLine />
          </button>
        </div>
      </div>

      <div className="mt-8 pb-2">
        <Button
          variant="primary"
          size="md"
          font="primary"
          shape="square"
          fontSize="sm"
          className="w-full"
        >
          Add to cart
        </Button>

        <div className="flex justify-between items-center mt-2.5 ms-1">
          <span className="text-neutral-800 font-sans text-xs font-normal">
            Buy now pay later with <strong>Klarna</strong>
          </span>
          <span className="flex items-center text-xs font-medium text-neutral-950 me-1">
            <span className="flex w-2.5 h-2.5 bg-green-600 rounded-full me-1.5 shrink-0"></span>
            In stock
          </span>
        </div>
      </div>
    </>
  );
}
