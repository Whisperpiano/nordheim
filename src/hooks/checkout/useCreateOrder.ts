import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../api/orders/orders";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useCreateOrder() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: (orderId) => {
      if (!orderId) {
        toast.error("Error retrieving order id.");
        return;
      }
      navigate(`/checkout/success?orderId=${orderId}`);
      toast.success("Order created successfully!");
    },
    onError: () => {
      toast.error("Error creating order.");
    },
  });
}
