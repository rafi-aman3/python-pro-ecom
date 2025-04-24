import { create } from "zustand";
import { BASE_URL } from "../utils/config";

export const useProductsStore = create((set) => ({
  products: null,
  singleProduct: null,
  getProductById: async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    set({ singleProduct: data });
  },
  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    set({ products: data });
  },
}));
