import { create } from "zustand";

interface ModalStore {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  setSearchOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  //Default values
  isCartOpen: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,

  //Actions
  setCartOpen: (isOpen: boolean) => set({ isCartOpen: isOpen }),
  setSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
  setMobileMenuOpen: (isOpen: boolean) => set({ isMobileMenuOpen: isOpen }),
}));
