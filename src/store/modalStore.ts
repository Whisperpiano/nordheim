import { create } from "zustand";

interface ModalStore {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  setSearchOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  //Default values
  isCartOpen: false,
  isSearchOpen: false,

  //Actions
  setCartOpen: (isOpen: boolean) => set({ isCartOpen: isOpen }),
  setSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
}));
