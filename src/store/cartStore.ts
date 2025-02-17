import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  slug: string;
  price: number;
  category: "city" | "mountain";
  quantity: number;
  variant: {
    volume: number;
    color: string;
  };
};

interface CartStore {
  count: number;
  cart: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  count: 0,
  totalPrice: 0,
  addItem: (item: CartItem) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          totalPrice: state.totalPrice + item.price * item.quantity,
          count: state.count + item.quantity,
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      }
      return {
        totalPrice: state.totalPrice + item.price * item.quantity,
        count: state.count + item.quantity,
        cart: [...state.cart, item],
      };
    }),
  removeItem: (id: string) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        return {
          totalPrice:
            state.totalPrice - existingItem.price * existingItem.quantity,
          count: state.count - existingItem.quantity,
          cart: state.cart.filter((cartItem) => cartItem.id !== id),
        };
      }
      return state;
    }),
  incrementItem: (id: string) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        return {
          totalPrice: state.totalPrice + existingItem.price,
          count: state.count + 1,
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return state;
    }),
  decrementItem: (id: string) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (!existingItem) return state;

      const newQuantity = existingItem.quantity - 1;

      return {
        totalPrice: state.totalPrice - existingItem.price,
        count: state.count - 1,
        cart:
          newQuantity > 0
            ? state.cart.map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, quantity: newQuantity }
                  : cartItem
              )
            : state.cart.filter((cartItem) => cartItem.id !== id),
      };
    }),
  reset: () => set({ cart: [], count: 0, totalPrice: 0 }),
}));
