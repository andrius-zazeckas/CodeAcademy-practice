import type { TProduct } from "../ProductsContext/types";

export type TProductProps = {
  product: TProduct;
};

export type TProductButtonsProps = {
  isProductInCart: boolean;
  productId: number;
};
