import { Box, ImageListItem, ImageListItemBar } from "@mui/material";
import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductActionButton } from "./ProductActionButton";
import type { TProductProps } from "./types";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductsContext);

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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        height="60px"
        // sx={{ "& button": { width: "40px" } }}
      >
        <ProductActionButton
          color="success"
          title="+"
          type="addProduct"
          productId={product.id}
        />

        {isProductInCart ? (
          <ProductActionButton
            color="error"
            title="-"
            type="removeProduct"
            productId={product.id}
          />
        ) : null}
      </Box>
    </ImageListItem>
  );
};
