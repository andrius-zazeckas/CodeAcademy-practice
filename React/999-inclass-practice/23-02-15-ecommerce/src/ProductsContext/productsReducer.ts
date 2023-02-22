// export const studentsReducer = (
//     state: { studentsAmount: number },
//     action: {
//       type: TStudentActionType;

import type { TProductState } from "./types";

export const productsReducer = (state: TProductState, action: any) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: [1] };

    case "addCartProduct":
      return { products: state.products, cartProducts: [1] };
    default:
      return state;
  }
};
