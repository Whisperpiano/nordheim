import { RiCheckboxCircleLine } from "react-icons/ri";
import { Link } from "react-router";
import { Order } from "../../CheckoutSuccess.page";

export default function OrderDetails({ order }: { order: Order }) {
  return (
    <>
      <section className="flex flex-col gap-8 mt-8 min-h-[calc(100vh-320px)]">
        <div className="max-w-[660px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-12 mt-4">
              <RiCheckboxCircleLine size={26} className="text-green-700" />
              <h1 className="text-xl font-semibold text-neutral-800">
                Thank you {order?.shipping_address.first_name}!
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                <h2 className="text-base font-medium text-neutral-600 mb-2">
                  Your order is confirmed
                </h2>
                <p>
                  You’ll recieve a confirmation email with your order details
                  shortly.
                </p>
              </div>

              <div className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
                <h2 className="text-base font-medium text-neutral-600 mb-2">
                  Order updates
                </h2>
                <p>You’ll get shipping and delivery updates by email.</p>
              </div>

              <article className="p-5 border-2 border-neutral-200">
                <h2 className="text-base font-medium text-neutral-600 mb-6">
                  Customer information
                </h2>
                <div className="flex gap-6 text-sm font-light text-neutral-700 font-sans">
                  <div className="flex-1 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <h3 className="font-medium mb-1">Contact information</h3>
                      <span>{order?.email}</span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-medium mb-1">Shipping address</h3>
                      <span>
                        {order?.shipping_address.first_name}{" "}
                        {order?.shipping_address.last_name}
                      </span>
                      <span>{order?.shipping_address.address}</span>
                      <span>{order?.shipping_address.postal_code}</span>
                      <span>{order?.shipping_address.city}</span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-medium mb-1">Shipping method</h3>
                      <span>{order?.shipping_method}</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-5">
                    <div>
                      <h3 className="font-medium mb-1">Payment method</h3>
                      <div className="flex items-center gap-1.5">
                        <img
                          src="/Mastercard.svg"
                          alt="Mastercard"
                          className="w-6 h-6"
                        />
                        <span>ending with {order?.payment_method}</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-medium mb-1">Billing address</h3>
                      <span>
                        {order?.shipping_address.first_name}{" "}
                        {order?.shipping_address.last_name}
                      </span>
                      <span>{order?.shipping_address.address}</span>
                      <span>
                        {order?.shipping_address.city},{" "}
                        {order?.shipping_address.postal_code}
                      </span>
                      <span> {order?.shipping_address.country}</span>
                    </div>
                  </div>
                </div>
              </article>

              <Link
                to="/"
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer mt-4"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
