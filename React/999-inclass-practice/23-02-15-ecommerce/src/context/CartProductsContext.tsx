import { createContext } from "react";
import { TProducts } from "../types/Tproducts";

export type TCart = {
  cartProducts: [];
  setCartProducts: [];
};

export const CartProductsContext = createContext<any>({
  cartProducts: [],
  setCartProducts: () => {},
});
