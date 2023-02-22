import type { Dispatch } from "react";
import type { TCartProduct } from "../types/TCartProduct";
import type { TProduct } from "../types/TProduct";

export type TProductsContext = TProductState & {
  dispatch: Dispatch<any>;
};

export type TProductState = {
  products: TProduct[];
  cartProducts: TCartProduct[];
};
