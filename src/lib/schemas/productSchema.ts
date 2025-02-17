import { z } from "zod";

export const productSchema = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number().positive("Price must be a positive number"),
  category: z.enum(["city", "mountain"]),
  discount: z.number().positive().nullable(),
  features: z.array(z.string()),
});

export const productsArraySchema = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;
export type ProductsArray = z.infer<typeof productsArraySchema>;

export const reviewSchema = z.object({
  id: z.number(),
  product_id: z.string().uuid(),
  title: z.string(),
  username: z.string(),
  email: z.string().email(),
  rating: z.number().min(1).max(5),
  review: z.string(),
  verified: z.boolean(),
});

export const reviewsArraySchema = z.array(reviewSchema);

export type Review = z.infer<typeof reviewSchema>;
export type ReviewsArray = z.infer<typeof reviewsArraySchema>;

export const variantSchema = z.object({
  id: z.string().uuid(),
  volume: z.number().positive(),
  weight: z.number().positive(),
  stock: z.number(),
  dimensions: z.string(),
  hex: z.string(),
  color: z.string(),
  product_id: z.string().uuid(),
});

export const variantsArraySchema = z.array(variantSchema);

export type Variant = z.infer<typeof variantSchema>;
export type VariantsArray = z.infer<typeof variantsArraySchema>;

export const fullProductSchema = productSchema.extend({
  reviews: reviewsArraySchema,
  variants: variantsArraySchema,
});

export const fullProductsArraySchema = z.array(fullProductSchema);

export type FullProduct = z.infer<typeof fullProductSchema>;
export type FullProductsArray = z.infer<typeof fullProductsArraySchema>;
