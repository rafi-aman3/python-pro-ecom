import { create } from "zustand";
import { BASE_URL } from "../utils/config";

export const useCartStore = create((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
  getCarts: async () => {
    
  }

}));