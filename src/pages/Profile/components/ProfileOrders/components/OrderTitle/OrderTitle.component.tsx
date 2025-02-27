import { UserOrder } from "../../../../../../lib/schemas/profileSchema";

export default function OrderTitle({ order }: { order: UserOrder }) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-3 md:gap-0">
      <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-start md:items-center">
        <div className="flex flex-row items-center gap-2 md:gap-0 md:flex-col uppercase font-condensed font-semibold">
          <span className="text-xs text-neutral-600">Order number</span>
          <span className="text-sm text-neutral-950">
            #{order.id.split("-").pop()}
          </span>
        </div>
        <div className="flex flex-row items-center  gap-2 md:gap-0 md:flex-col uppercase font-condensed font-semibold">
          <span className="text-xs text-neutral-600">Date</span>
          <span className="text-sm text-neutral-950">
            {order.created_at.split("T")[0]}
          </span>
        </div>
      </div>
      <div className="flex justify-start md:justify-end items-center">
        <span className="uppercase font-condensed font-medium bg-green-100 text-green-800 text-xs px-2.5 py-0.5 translate-x-0 md:translate-x-3 ">
          {order.status}
        </span>
      </div>
    </div>
  );
}
