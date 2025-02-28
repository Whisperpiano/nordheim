import OrderDetails from "./components/OrderDetails/OrderDetails.component";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../../api/orders/orders";

import { useEffect } from "react";
import { useCartStore } from "../../store/cartStore";
import Logo from "../../components/Logo/Logo.component";
import { UserOrder } from "../../lib/schemas/profileSchema";
import SuccessSumary from "./components/SuccessSumary/SuccessSumary.component";
import SuccessSumaryMobile from "./components/SuccessSumaryMobile/SuccessSumaryMobile.component";
import { useOpenSummary } from "../../hooks/checkout/useOpenSummary";
import usePageTitle from "../../hooks/title/usePageTitle";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get("orderId");

  const { data: order } = useQuery<UserOrder>({
    queryKey: ["orders", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
  });
  const resetCart = useCartStore((state) => state.reset);

  const { summaryOpen, handleSummaryOpen } = useOpenSummary();

  useEffect(() => {
    if (!orderId) {
      navigate("/");
    } else {
      window.scrollTo(0, 0);
      resetCart();
    }
  }, [resetCart, navigate, orderId]);

  usePageTitle("Nordheim | Thank you!");

  if (!order) return null;

  return (
    <>
      <section className="grid lg:grid-cols-[55%_45%] min-h-screen">
        {/* Details section */}
        <article className=" p-8 order-2 lg:order-1 flex justify-center lg:justify-end min-h-[calc(100dvh-117px)]">
          <div className="max-w-[660px] w-full ">
            {/* Header */}
            <h1>
              <Link to="/">
                <span className="sr-only">Nordheim</span>
                <Logo theme="dark" />
              </Link>
            </h1>

            {/* Details*/}
            <OrderDetails order={order} />

            {/* Footer */}
            <footer className="text-xs text-neutral-500 font-condensed font-normal mt-10 border-t-2 border-neutral-200 pt-6">
              2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </footer>
          </div>
        </article>

        {/* Summary section*/}
        <article className=" bg-gray-200/50 p-8 max-h-screen flex lg:sticky top-0 z-50 order-1 lg:order-2 lg:border-none border-b border-neutral-300">
          <SuccessSumary order={order} />
          <SuccessSumaryMobile
            order={order}
            summaryOpen={summaryOpen}
            handleSummaryOpen={handleSummaryOpen}
          />
        </article>
      </section>
    </>
  );
}
