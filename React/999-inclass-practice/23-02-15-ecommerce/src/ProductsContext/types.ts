import type { Dispatch, SetStateAction } from "react";
import type { TCartProduct } from "../types/TCartProduct";
import type { TProduct } from "../types/TProduct";

export type TProductsContext = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;

  cartProducts: TCartProduct[];
  setCartProducts: Dispatch<SetStateAction<TCartProduct[]>>;
};

export type TProductState = {
  products: TProduct[];
  cartProducts: TCartProduct[];
};
