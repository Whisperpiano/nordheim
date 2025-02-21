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

import { useEffect } from "react";
import { useCartStore } from "../../../../store/cartStore";
import { createOrder } from "../../../../api/orders/orders";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function CheckoutForm({
  setSelectedShipping,
  selectedShipping,
}: {
  setSelectedShipping: (shipping: "economy" | "home" | null) => void;
  selectedShipping: "economy" | "home" | null;
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
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createOrder,
    onSuccess: (orderId) => {
      if (!orderId) {
        toast.error("Error retrieving order id.");
        return;
      }

      toast.success("Order created successfully!");
      navigate(`/checkout/success?orderId=${orderId}`);
    },
    onError: () => {
      toast.error("Error creating order.");
    },
  });

  const cart = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.count);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const shippingPrice = selectedShipping === "economy" ? 69 : 159;

  // const navigate = useNavigate();
  const shipping = watch("shipping");

  useEffect(() => {
    setSelectedShipping(shipping);
  }, [shipping, setSelectedShipping]);

  const onSubmit = async (data: CheckoutFormData) => {
    const secureCardNumber = data.cardNumber?.replace(/\s/g, "").slice(-4);
    const orderData = {
      email: data.email,
      status: "accepted",
      total_items: totalItems,
      total_price: totalPrice + shippingPrice,
      payment_method: data.payment,
      shipping_method: selectedShipping,
      shipping_address: {
        country: data.country,
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company,
        address: data.address,
        postal_code: data.postalCode,
        city: data.city,
        phone: data.phone,
        card_number: secureCardNumber,
      },
    };

    const orderProducts = cart.map((product) => ({
      quantity: product.quantity,
      product_id: product.id,
      variant_id: product.variant.id,
    }));

    mutate({ data: orderData, products: orderProducts });
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
