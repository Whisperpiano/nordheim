import { UserOrder } from "../../../../../../lib/schemas/profileSchema";

export default function CustomerInformation({ order }: { order: UserOrder }) {
  const { email, shipping_address, shipping_method, payment_method } = order;

  const convertedShippingMethod =
    shipping_method === "economy"
      ? "DHL Economy Select Delivery"
      : "DHL Express Home Delivery";

  const imagePaymentMethod =
    payment_method === "klarna"
      ? "/Klarna.svg"
      : payment_method === "googlepay"
      ? "/GooglePay.svg"
      : "/Mastercard.svg";

  const paymentMethodText =
    payment_method === "klarna"
      ? "Klarna"
      : payment_method === "googlepay"
      ? "GooglePay"
      : `ending with ${shipping_address.card_number}`;

  return (
    <article className="p-5 border-2 border-neutral-200">
      <h2 className="text-base font-medium text-neutral-600 mb-6">
        Customer information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light text-neutral-700 font-sans">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col">
            <h3 className="font-medium mb-1">Contact information</h3>
            <span>{email}</span>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium mb-1">Shipping address</h3>
            <span>
              {shipping_address.first_name} {shipping_address.last_name}
            </span>
            <span>{shipping_address.address}</span>
            <span>
              {shipping_address.city}, {shipping_address.postal_code}
            </span>
            <span> {shipping_address.country}</span>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium mb-1">Shipping method</h3>
            <span>{convertedShippingMethod}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h3 className="font-medium mb-1">Payment method</h3>
            <div className="flex items-center gap-1.5">
              <img
                src={imagePaymentMethod}
                alt={payment_method}
                className="w-6 h-6"
              />
              <span>{paymentMethodText}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium mb-1">Billing address</h3>
            <span>
              {shipping_address.first_name} {shipping_address.last_name}
            </span>
            <span>{shipping_address.address}</span>
            <span>
              {shipping_address.city}, {shipping_address.postal_code}
            </span>
            <span> {shipping_address.country}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
