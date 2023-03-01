import { ImageListItem, ImageListItemBar } from "@mui/material";
import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TProductProps } from "./types";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <ImageListItem>
      <img
        src={`${product.image}?w=248&fit=crop&auto=format`}
        srcSet={`${product.image}?w=248&h&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />

      <ImageListItemBar
        title={product.title}
        subtitle={<span>PRICE: {product.price}</span>}
        position="top"
      />

      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to cart
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "removeProduct",
            payload: { productId: product.id },
          })
        }
      >
        Remove from cart
      </button>
    </ImageListItem>
  );
};
