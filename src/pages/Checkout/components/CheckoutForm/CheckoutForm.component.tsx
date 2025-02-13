import { Link } from "react-router";
import { RiArrowLeftLine } from "react-icons/ri";

import ContactSection from "./components/ContactSection.component.tsx/ContactSection.component";
import DeliverySection from "./components/DeliverySection/DeliverySection.component";
import PaymentSection from "./components/PaymentSection/PaymentSection.component";
import ShippingSection from "./components/ShippingSection/ShippingSection.component";

interface CheckoutFormProps {
  hasAddress: boolean;
  setHasAddress: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPayment: string;
  setSelectedPayment: React.Dispatch<React.SetStateAction<string>>;
}

export default function CheckoutForm({
  hasAddress,
  setHasAddress,
  selectedPayment,
  setSelectedPayment,
}: CheckoutFormProps) {
  console.log(setHasAddress);
  return (
    <form className="flex flex-col gap-8 mt-8">
      <div className="px-2">
        <ContactSection />
      </div>

      <div className="px-2">
        <DeliverySection />
      </div>

      <div className="px-2">
        <PaymentSection hasAddress={hasAddress} />
      </div>

      <div>
        <ShippingSection
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
      </div>

      <p className="text-xs font-sans font-medium text-neutral-600 underline underline-offset-4 cursor-pointer flex items-center gap-1 px-2">
        <span>
          <RiArrowLeftLine className="text-neutral-600" size={16} />
        </span>
        Return to cart
      </p>

      <div className="px-2">
        <Link
          to="/checkout/success"
          className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer  mb-6"
        >
          Pay now
        </Link>
      </div>
    </form>
  );
}
