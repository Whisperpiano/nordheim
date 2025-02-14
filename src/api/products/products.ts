import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";
import { z } from "zod";
import { fullProductsArraySchema } from "../../lib/schemas/productSchema";

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
