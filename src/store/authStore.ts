import { create } from "zustand";
import { supabase } from "../lib/supabase/client";

// interface UserProfile {
//   id: string;
//   address: string | null;
//   first_name: string;
//   last_name: string | null;
//   phone: string | null;
//   created_at: Date;
//   updated_at: Date | null;
// }

// interface Order {
//   created_at: Date;
//   email: string;
//   id: string;
//   payment_method: string;
//   shipping_address: {
//     address: string;
//     city: string;
//     company: string | null;
//     country: string;
//     first_name: string;
//     last_name: string;
//     phone: string;
//     postal_code: string;
//   };
//   status: string;
//   total_items: number;
//   total_price: number;
//   updated_at: Date | null;
// }

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  email: "",
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  checkAuth: async () => {
    const { data } = await supabase.auth.getUser();
    set({ isLoggedIn: !!data.user });
    console.log(data.user ? "User logged in" : "Not logged in");
  },
}));
