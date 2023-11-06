import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartStore = {
  cart: string[];
  addToCart: (item: string) => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      cart: [],
      addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    }),
    {
      name: "cart-storage",
    }
  )
);
