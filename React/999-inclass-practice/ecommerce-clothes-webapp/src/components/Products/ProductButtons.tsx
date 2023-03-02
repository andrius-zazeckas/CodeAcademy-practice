import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { TProductsAction } from "../ProductsContext/types";
import type { TProductButtonsProps } from "./types";

export const ProductButtons: FC<TProductButtonsProps> = ({
  isProductInCart,
  productId,
}) => {
  const { dispatch } = useContext(ProductsContext);

  const ProductButton = ({
    title,
    type,
  }: {
    title: string;
    type: TProductsAction["type"];
  }) => {
    return (
      <button onClick={() => dispatch({ type, payload: { productId } })}>
        {title}
      </button>
    );
  };

  return (
    <>
      <button
        onClick={() => dispatch({ type: "addProduct", payload: { productId } })}
      >
        +
      </button>

      {isProductInCart ? (
        <button
          onClick={() =>
            dispatch({
              type: "removeProduct",
              payload: { productId },
            })
          }
        >
          -
        </button>
      ) : null}
    </>
  );
};
