import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TProductProps } from "./types";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to cart
      </button>
    </div>
  );
};
