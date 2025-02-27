import { useNavigate } from "react-router";
import { useShippingHandler } from "../../../../hooks/checkout/useShippingHandler";
import { useCheckoutForm } from "../../../../hooks/checkout/useCheckoutForm";
import { useForm } from "react-hook-form";
import { RiArrowLeftLine } from "react-icons/ri";
import { CheckoutFormProps } from "./CheckoutForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutFormData,
  checkoutSchema,
} from "../../../../lib/schemas/checkoutSchema";

import DeliverySection from "./components/DeliverySection/DeliverySection.component";
import ContactSection from "./components/ContactSection.component.tsx/ContactSection.component";
import Button from "../../../../components/Button/Button.component";
import ShippingSection from "./components/ShippingSection/ShippingSection.component";
import PaymentSection from "./components/PaymentSection/PaymentSection.component";

export default function CheckoutForm({
  setSelectedShipping,
  selectedShipping,
}: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const { shipping } = useShippingHandler({
    selectedShipping,
    setSelectedShipping,
    watch,
  });

  const { handleSubmitOrder } = useCheckoutForm({
    shipping,
    selectedShipping,
  });

  const navigate = useNavigate();

  return (
    <form
      className="flex flex-col gap-8 mt-8"
      onSubmit={handleSubmit(handleSubmitOrder)}
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

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-xs font-sans font-medium text-neutral-600 underline underline-offset-4 cursor-pointer flex items-center gap-1 px-2"
      >
        <span>
          <RiArrowLeftLine className="text-neutral-600" size={16} />
        </span>
        Go back
      </button>

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
