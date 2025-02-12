import { create } from "zustand";

interface ModalStore {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isFiltersOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  setSearchOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setFiltersOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  //Default values
  isCartOpen: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,
  isFiltersOpen: false,

  //Actions
  setCartOpen: (isOpen: boolean) => set({ isCartOpen: isOpen }),
  setSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
  setMobileMenuOpen: (isOpen: boolean) => set({ isMobileMenuOpen: isOpen }),
  setFiltersOpen: (isOpen: boolean) => set({ isFiltersOpen: isOpen }),
}));
