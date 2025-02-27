import { shippingMethodPrice } from "../../config/config";
import { CheckoutFormData } from "../../lib/schemas/checkoutSchema";
import { useCartStore } from "../../store/cartStore";
import { useCreateOrder } from "./useCreateOrder";

interface CheckoutFormHookProps {
  shipping: "economy" | "home";
  selectedShipping: "economy" | "home";
}

export function useCheckoutForm({
  shipping,
  selectedShipping,
}: CheckoutFormHookProps) {
  const { mutate: createOrder } = useCreateOrder();

  const cart = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.count);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const handleSubmitOrder = async (data: CheckoutFormData) => {
    const secureCardNumber = data.cardNumber?.replace(/\s/g, "").slice(-4);
    const orderData = {
      email: data.email,
      status: "accepted",
      total_items: totalItems,
      total_price: totalPrice + shippingMethodPrice[selectedShipping],
      payment_method: data.payment,
      shipping_method: shipping,
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

    console.log(data);

    createOrder({ data: orderData, products: orderProducts });
  };

  return { handleSubmitOrder };
}
