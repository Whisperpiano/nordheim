import { create } from "zustand";
import { supabase } from "../lib/supabase/client";

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  checkAuth: async () => {
    const { data } = await supabase.auth.getUser();
    set({ isLoggedIn: !!data.user });
    console.log(data.user ? "User logged in" : "Not logged in");
  },
}));
