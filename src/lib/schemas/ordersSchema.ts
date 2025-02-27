import { z } from "zod";

export const orderDataSchema = z.object({
  email: z.string(),
  status: z.string(),
  total_items: z.number(),
  total_price: z.number(),
  payment_method: z.enum(["card", "klarna", "googlepay"]),
  shipping_method: z.enum(["economy", "home"]).nullable(),
  shipping_address: z.object({
    country: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    company: z.string().optional(),
    address: z.string(),
    postal_code: z.string(),
    city: z.string(),
    phone: z.string(),
    card_number: z.string().optional(),
  }),
});

export const orderItemSchema = z.object({
  quantity: z.number(),
  product_id: z.string(),
  variant_id: z.string(),
});

export type OrderData = z.infer<typeof orderDataSchema>;
export type OrderItem = z.infer<typeof orderItemSchema>;
