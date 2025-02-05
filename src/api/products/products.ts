import { supabase } from "../../lib/supabase/client";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Error al obtener los productos:", error);
  }
  return products;
}
