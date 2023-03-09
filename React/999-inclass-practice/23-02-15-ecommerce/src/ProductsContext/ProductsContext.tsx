import { createContext } from "react";
import { TProductsContext } from "./types";

export const ProductsContext = createContext<TProductsContext>({
  products: [],
  setProducts: () => {},
});
