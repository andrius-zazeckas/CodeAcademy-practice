import type { TProduct, TProductsAction } from "../ProductsContext/types";

export type TProductProps = {
  product: TProduct;
};

export type TProductActionButtonProps = {
  title: string;
  type: TProductsAction["type"];
  productId: number;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};
