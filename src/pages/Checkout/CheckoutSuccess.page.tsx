import LogoHeader from "../../layout/components/Header/LogoHeader/LogoHeader.component";

// import { SharedSelection } from "@heroui/system";
// import { useState } from "react";

import OrderDetails from "./components/OrderDetails/OrderDetails.component";
import { useNavigate, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../../api/orders/orders";

import { formatNumber } from "../../utils/formatNumber";
import { useEffect } from "react";
import { useCartStore } from "../../store/cartStore";

export type Order = {
  id: string;
  created_at: string;
  updated_at: string | null;
  email: string;
  status: "pending" | "accepted" | "shipped" | "delivered" | "canceled";
  total_items: number;
  total_price: number;
  payment_method: "klarna" | "googlepay" | "card";
  shipping_method: "home" | "economy";
  shipping_address: ShippingAddress;
  order_items: OrderItem[];
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  products: Product;
  variant_id: string;
  variants: Variant;
  quantity: number;
};

export type Product = {
  id: string;
  slug: string;
  price: number;
  category: "city" | "mountain";
  title: string;
};

export type Variant = {
  id: string;
  hex: string;
  color: string;
  volume: number;
  stock: number;
};

export type ShippingAddress = {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  company?: string;
};

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get("orderId");

  // const [summaryOpen, setSummaryOpen] = useState(false);

  // function handleSummaryOpen(keys: SharedSelection) {
  //   if (keys instanceof Set) {
  //     setSummaryOpen(keys.size > 0);
  //   } else {
  //     setSummaryOpen(false);
  //   }
  // }

  const { data: order } = useQuery<Order>({
    queryKey: ["orders", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
  });
  const resetCart = useCartStore((state) => state.reset);

  useEffect(() => {
    if (!orderId) {
      navigate("/");
    } else {
      resetCart();
    }
  }, [resetCart, navigate, orderId]);

  if (!order) return null;

  return (
    <>
      <section className="grid lg:grid-cols-[55%_45%] lg:min-h-screen">
        <div className=" p-8 order-2 lg:order-1 flex justify-center lg:justify-end">
          <div className="max-w-[660px] w-full ">
            <LogoHeader />
            <OrderDetails order={order} />
            <footer className="text-xs text-neutral-500 font-condensed font-normal mt-10 border-t-2 border-neutral-200 pt-6">
              2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>

        <div className=" bg-gray-200/50 p-8 max-h-screen flex lg:sticky top-0 z-50 order-1 lg:order-2 lg:border-none border-b border-neutral-300">
          <div className="max-w-[520px] w-full mr-auto flex-col gap-5 hidden lg:flex">
            {order.order_items.map((item) => {
              return (
                <article key={item.id} className="flex gap-4 items-center">
                  <div className="relative inline-flex">
                    <img
                      src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${item.products.category}-images//${item.products.slug}-xs.webp`}
                      alt="City"
                      className="aspect-square w-[64px] object-cover"
                    />
                    <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
                      {item.quantity}
                    </span>
                  </div>
                  <section className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-950 text-sm font-medium font-condensed">
                        {item.products.title}
                      </span>
                      <span className="text-neutral-500 text-sm font-medium font-condensed">
                        {formatNumber(item.products.price)} kr
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                      {item.variants.volume}L / {item.variants.color}
                    </span>
                  </section>
                </article>
              );
            })}

            <div className="font-sans pt-6 border-t-1 border-neutral-300">
              <div className="text-sm flex flex-col gap-2 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Subtotal</span>
                  <span className="text-neutral-600 font-medium">
                    kr{" "}
                    {formatNumber(
                      order.total_price -
                        (order.shipping_method === "economy" ? 69 : 159)
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-950 font-medium">Shipping</span>
                  <span className="text-neutral-600 font-normal">
                    kr{" "}
                    {formatNumber(
                      order.shipping_method === "economy" ? 69 : 159
                    )}
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
          {/* <OrderSummaryMobile
            selectedShipping={"economy"}
            summaryOpen={summaryOpen}
            handleSummaryOpen={handleSummaryOpen}
          /> */}
        </div>
      </section>
    </>
  );
}
