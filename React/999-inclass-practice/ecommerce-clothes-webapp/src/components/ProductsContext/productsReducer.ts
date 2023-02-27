import type { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      console.log("add product");
      break;

    case "removeProduct":
      console.log("remove product");
      break;

    case "setProducts":
      console.log("set products");
      break;

    default:
      console.log("no case matched");
  }
  return state;
};
