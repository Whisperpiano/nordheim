import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";
import { z } from "zod";

const categorySchema = z.enum(["city", "mountain"]);

type Category = z.infer<typeof categorySchema>;

export async function getProductsByCategory(category: Category) {
  const validation = categorySchema.safeParse(category);

  if (!validation.success) {
    toast.error(`Invalid category: ${category}`);
    return null;
  }

  const { data: products, error } = await supabase
    .from("products")
    .select("*, reviews(*)")
    .eq("category", category);

  if (error) {
    toast.error(`Error getting ${category} products.`);
    return null;
  }

  if (!products || products.length === 0) {
    toast.error(`No ${category} products found.`);
    return [];
  }

  return products;
}
