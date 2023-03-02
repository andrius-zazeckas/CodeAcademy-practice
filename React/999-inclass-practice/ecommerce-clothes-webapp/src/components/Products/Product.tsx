import { ImageListItem, ImageListItemBar } from "@mui/material";
import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductButtons } from "./ProductButtons";
import type { TProductProps } from "./types";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts, dispatch } = useContext(ProductsContext);

  const isProductInCart = cartProducts.some(
    // ToDo - naudoti objekta del O(N)2 time complexity
    (cartProduct) => cartProduct.id === product.id
  );

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

      <ProductButtons
        isProductInCart={isProductInCart}
        productId={product.id}
      />
    </ImageListItem>
  );
};
