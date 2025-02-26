import { create } from "zustand";
import { supabase } from "../lib/supabase/client";

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
  },
}));
