import { createContext } from "react";
import type { TProductsContext } from "./types";

export const INITIAL_VALUE: TProductsContext = {
  products: [],
  setProducts: () => {},
  cartProducts: [],
  setCartProducts: () => {},
};

// const INITIAL_VALUE = {
//   products: [],
//   setProducts: () => {},
//   cartProducts: [],
//   setCartProducts: () => {},
// } satisfies TProductsContext;

// const INITIAL_VALUE = {
//   products: [],
//   setProducts: () => {},
//   cartProducts: [],
//   setCartProducts: () => {},
// } as TProductsContext;

export const ProductsContext = createContext(INITIAL_VALUE);
