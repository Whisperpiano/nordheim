import { Accordion, AccordionItem } from "@heroui/accordion";
import { UserOrder } from "../../../../lib/schemas/profileSchema";
import { shippingMethodPrice } from "../../../../config/config";
import { formatNumber } from "../../../../utils/formatNumber";

import SuccessProduct from "../SuccessSumary/SuccessProduct/SuccessProduct.component";
import SummaryMobileTitle from "../../../Checkout/components/OrderSummaryMobile/SummaryMobileTitle/SummaryMobileTitle.component";

export default function SuccessSumaryMobile({ order }: { order: UserOrder }) {
  return (
    <div className="max-w-[660px] w-full mr-auto flex lg:hidden mx-auto">
      <Accordion selectionMode="single" hideIndicator>
        <AccordionItem
          key="1"
          aria-label="Order summary"
          title={
            <SummaryMobileTitle
              summaryOpen={false}
              selectedShipping={order.shipping_method}
              totalPrice={
                order.total_price - shippingMethodPrice[order.shipping_method]
              }
            />
          }
        >
          <div className="flex flex-col gap-5 mt-4">
            {order.order_items.map((item) => (
              <SuccessProduct key={item.id} item={item} />
            ))}

            {/* Summary details */}
            <div className="font-sans pt-6 border-t-1 border-neutral-300">
              <div className="text-sm flex flex-col gap-2 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Subtotal</span>
                  <span className="text-neutral-600 font-medium">
                    {formatNumber(
                      order.total_price -
                        shippingMethodPrice[order.shipping_method]
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Shipping</span>
                  <span className="text-neutral-600 font-normal">
                    kr{" "}
                    {formatNumber(shippingMethodPrice[order.shipping_method])}
                  </span>
                </div>
              </div>
              <div className="text-base font-medium flex justify-between items-center border-t-1 border-neutral-300 pt-4">
                <span>Total</span>
                <span className="font-semibold">
                  kr {formatNumber(order.total_price)}
                </span>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
