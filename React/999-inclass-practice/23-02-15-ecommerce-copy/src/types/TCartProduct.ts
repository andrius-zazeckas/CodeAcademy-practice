import type { TProduct } from ".";

export type TCartProduct = TProduct & {
  amount: number;
};
