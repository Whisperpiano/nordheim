import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";

export async function getCityProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "city");

  if (error) {
    toast.error("Error getting city products.");
    console.error("Error getting city products.", error);
  }

  if (products) {
    toast.success("City products loaded.");
    return products;
  }
}

export async function getMountainProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "mountain");

  if (error) {
    toast.error("Error getting mountain products.");
    console.error("Error getting mountain products.", error);
  }

  if (products) {
    toast.success("Mountain products loaded.");
    return products;
  }
}
