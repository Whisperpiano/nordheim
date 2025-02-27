import { RiCheckboxCircleLine } from "react-icons/ri";

export default function SuccessMessage({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-12 mt-4">
      <RiCheckboxCircleLine size={26} className="text-green-700" />
      <h1 className="text-xl font-semibold text-neutral-800">
        Thank you {name}!
      </h1>
    </div>
  );
}
