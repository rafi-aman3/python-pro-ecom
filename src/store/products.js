import { create } from "zustand";
import { BASE_URL } from "../utils/config";

export const useProductsStore = create((set) => ({
  products: null,
  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    set({ products: data });
  },
}));
