import {
  userOrdersSchema,
  userProfileSchema,
} from "../../lib/schemas/profileSchema";
import { supabase } from "../../lib/supabase/client";

export async function getUserProfile() {
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  const userID = user.user.id;

  const { data: userProfile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userID)
    .single();

  if (profileError) {
    throw new Error(profileError.message);
  }

  const parsedUserProfile = userProfileSchema.safeParse(userProfile);

  if (!parsedUserProfile.success) {
    console.log("userProfile", parsedUserProfile.error);
    return null;
  }

  const userEmail = user.user.email;

  const { data: userOrders, error: ordersError } = await supabase
    .from("orders")
    .select("*, order_items(*, products(*), variants(*))")
    .eq("email", userEmail)
    .order("created_at", { ascending: false });

  if (ordersError) {
    throw new Error(ordersError.message);
  }

  const parsedUserOrders = userOrdersSchema.safeParse(userOrders);
  if (!parsedUserOrders.success) {
    console.log("userOrders", parsedUserOrders.error);
    return null;
  }

  return {
    userProfile: parsedUserProfile.data,
    userOrders: parsedUserOrders.data,
    userEmail,
  };
}
