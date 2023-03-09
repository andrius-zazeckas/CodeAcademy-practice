import { TCartProduct } from "../types/TCartProduct";
import { TProduct } from "../types/TProduct";

export type TProductsContext = {
  products: TProduct[];
  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export type TCartProductsContext = {
  cartProducts: TCartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<TCartProduct[]>>;
};
