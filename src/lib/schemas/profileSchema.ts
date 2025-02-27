import { z } from "zod";
import { productSchema, variantSchema } from "./productSchema";

export const userProfileSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string(),
  updated_at: z.string().nullable(),
  first_name: z.string(),
  last_name: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export const orderItemSchema = z.object({
  id: z.string().uuid(),
  quantity: z.number(),
  order_id: z.string().uuid(),
  product_id: z.string().uuid(),
  variant_id: z.string().uuid(),
  products: productSchema,
  variants: variantSchema,
});

export type OrderItem = z.infer<typeof orderItemSchema>;

export const orderItemsArraySchema = z.array(orderItemSchema);

export type OrderItemsArray = z.infer<typeof orderItemsArraySchema>;

export const shippingAddressSchema = z.object({
  country: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  company: z.string().optional(),
  address: z.string(),
  postal_code: z.string(),
  city: z.string(),
  phone: z.string(),
  card_number: z.string().optional(),
});

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export const userOrderSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string(),
  updated_at: z.string().nullable(),
  email: z.string().email(),
  status: z.enum(["accepted", "cancelled", "shipped"]),
  total_items: z.number(),
  total_price: z.number(),
  payment_method: z.enum(["klarna", "googlepay", "card"]),
  shipping_address: shippingAddressSchema,
  order_items: orderItemsArraySchema,
});

export type UserOrder = z.infer<typeof userOrderSchema>;

export const userOrdersSchema = z.array(userOrderSchema);

export type UserOrders = z.infer<typeof userOrdersSchema>;
