import { createContext } from "react";
import { TCartProductsContext } from "./types";

export const CartProductsContext = createContext<TCartProductsContext>({
  cartProducts: [],
  setCartProducts: () => {},
});
