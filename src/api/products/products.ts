import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";
import { z } from "zod";
import {
  fullProductsArraySchema,
  fullProductSchema,
} from "../../lib/schemas/productSchema";

const categorySchema = z.enum(["city", "mountain"]);

type Category = z.infer<typeof categorySchema>;

export async function getProductsByCategory(category: Category) {
  const categoryValidation = categorySchema.safeParse(category);

  if (!categoryValidation.success) {
    toast.error(`Invalid category: ${category}`);
    return null;
  }

  const { data: products, error } = await supabase
    .from("products")
    .select("*, reviews(*), variants(*)")
    .eq("category", category);

  if (error) {
    toast.error(`Error getting ${category} products.`);
    return null;
  }

  if (!products || products.length === 0) {
    toast.error(`No ${category} products found.`);
    return [];
  }

  const parsedProducts = fullProductsArraySchema.safeParse(products);

  if (!parsedProducts.success) {
    toast.error(`Error parsing ${category} products.`);
    console.log(parsedProducts.error);
    return null;
  }

  return parsedProducts.data;
}

export async function getProductBySlug(slug: string) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*, reviews(*), variants(*)")
    .eq("slug", slug);

  if (error) {
    toast.error(`Error getting product by slug: ${slug}`);
    return null;
  }

  if (!product || product.length === 0) {
    toast.error(`No product found with slug: ${slug}`);
    return null;
  }

  const parsedProduct = fullProductSchema.safeParse(product[0]);

  if (!parsedProduct.success) {
    toast.error(`Error parsing product by slug: ${slug}`);
    console.log(parsedProduct.error);
    return null;
  }

  return parsedProduct.data;
}
