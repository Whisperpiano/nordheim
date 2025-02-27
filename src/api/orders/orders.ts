import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";
import { z } from "zod";
import {
  OrderData,
  orderDataSchema,
  OrderItem,
} from "../../lib/schemas/ordersSchema";
import { orderItemSchema } from "../../lib/schemas/profileSchema";

export async function createOrder({
  data,
  products,
}: {
  data: OrderData;
  products: OrderItem[];
}) {
  const orderDataValidation = orderDataSchema.safeParse(data);
  const orderItemsValidation = z.array(orderItemSchema).safeParse(products);

  if (!orderDataValidation.success || !orderItemsValidation.success) {
    return toast.error("Error validating order data or items.");
  }

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert(data)
    .select();

  if (orderError) {
    toast.error("Error creating order.");
    return null;
  }

  if (!order || order.length === 0) {
    toast.error("No order found.");
    return null;
  }

  const [{ id: orderId }] = order;

  const orderItems = products.map((product) => ({
    order_id: orderId,
    product_id: product.product_id,
    quantity: product.quantity,
    variant_id: product.variant_id,
  }));

  const { data: orderItemsData, error: orderItemsError } = await supabase
    .from("order_items")
    .insert(orderItems)
    .select();

  if (orderItemsError) {
    toast.error("Error creating order items.");
    return null;
  }

  if (!orderItemsData || orderItemsData.length === 0) {
    toast.error("No order items found.");
    return null;
  }

  return order[0].id;
}

export async function getOrderById(orderId: string | null) {
  const { data: order, error } = await supabase
    .from("orders")
    .select("*, order_items(*, products(*), variants(*))")
    .eq("id", orderId)
    .single();

  if (error) {
    toast.error("Error getting order.");
    return null;
  }

  if (!order || order.length === 0) {
    toast.error("No order found.");
    return null;
  }
  return order;
}
