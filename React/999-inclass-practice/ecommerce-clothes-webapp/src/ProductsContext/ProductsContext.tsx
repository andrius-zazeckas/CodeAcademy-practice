import { createContext } from "react";
import type { TProductsContext } from "./types";

const INITIAL_VALUE = {
  fetchedProducts: [],
  cartProducts: [],
  dispatch: () => {},
} as const;

export const ProductsContext = createContext<TProductsContext>(INITIAL_VALUE);
