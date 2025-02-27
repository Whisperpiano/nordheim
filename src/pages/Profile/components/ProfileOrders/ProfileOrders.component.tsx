import { Accordion, AccordionItem } from "@heroui/accordion";
import { OrderItem, UserOrders } from "../../../../lib/schemas/profileSchema";
import { profileOrdersAccordionStyles } from "./ProfileOrders.styles";

import OrderTitle from "./components/OrderTitle/OrderTitle.component";
import OrderBody from "./components/OrderBody/OrderBody.component";
import OrderFooter from "./components/OrderFooter/OrderFooter.component";

export default function ProfileOrders({
  userOrders,
}: {
  userOrders: UserOrders;
}) {
  return (
    <section className="border border-gray-300 rounded-none p-6 ">
      <h2 className="flex flex-col uppercase font-condensed font-semibold">
        <span className="text-base text-neutral-600">My</span>
        <span className="text-xl text-neutral-950">orders</span>
      </h2>

      {userOrders && userOrders.length > 0 ? (
        <Accordion
          selectionMode="multiple"
          defaultSelectedKeys={["0"]}
          variant="splitted"
          itemClasses={profileOrdersAccordionStyles}
          className="px-0 mt-6 flex flex-col gap-3 "
        >
          {userOrders.map((order, i) => {
            return (
              <AccordionItem
                key={i}
                indicator={<span className="hidden"></span>}
                aria-label={`Order ${order.id.split("-").pop()} details`}
                title={<OrderTitle order={order} />}
              >
                <div className="flex flex-col gap-6">
                  {order.order_items.map((item: OrderItem) => {
                    return <OrderBody key={item.id} item={item} />;
                  })}
                </div>
                <OrderFooter
                  shippingMethod={order.shipping_method}
                  totalPrice={order.total_price}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <div className="mt-6 md:pb-52">
          <p className="text-neutral-700 font-sans text-sm font-light">
            You haven't placed any orders yet.
          </p>
        </div>
      )}
    </section>
  );
}
