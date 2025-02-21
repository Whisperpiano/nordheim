import { RiArrowLeftLine } from "react-icons/ri";

import ContactSection from "./components/ContactSection.component.tsx/ContactSection.component";
import DeliverySection from "./components/DeliverySection/DeliverySection.component";
import { useForm } from "react-hook-form";
import {
  CheckoutFormData,
  checkoutSchema,
} from "../../../../lib/schemas/checkoutSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../../components/Button/Button.component";

import ShippingSection from "./components/ShippingSection/ShippingSection.component";
import PaymentSection from "./components/PaymentSection/PaymentSection.component";
// import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function CheckoutForm({
  setSelectedShipping,
}: {
  setSelectedShipping: (shipping: "economy" | "home" | null) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  // const navigate = useNavigate();
  const shipping = watch("shipping");

  useEffect(() => {
    setSelectedShipping(shipping);
  }, [shipping, setSelectedShipping]);

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    // navigate("/checkout/success");
  };

  return (
    <form
      className="flex flex-col gap-8 mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-2">
        <ContactSection register={register} errors={errors} />
      </div>

      <div className="px-2">
        <DeliverySection register={register} errors={errors} />
      </div>

      <div className="px-2">
        <ShippingSection errors={errors} control={control} />
      </div>

      <div>
        <PaymentSection register={register} errors={errors} control={control} />
      </div>

      <p className="text-xs font-sans font-medium text-neutral-600 underline underline-offset-4 cursor-pointer flex items-center gap-1 px-2">
        <span>
          <RiArrowLeftLine className="text-neutral-600" size={16} />
        </span>
        Return to cart
      </p>

      <div className="px-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          font="primary"
          shape="square"
          className="w-full"
        >
          Pay now
        </Button>
      </div>
    </form>
  );
}
