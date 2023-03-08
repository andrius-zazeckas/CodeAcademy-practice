import { Box, Grid, Typography } from "@mui/material";
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
    <Grid
      item
      xs={6}
      sm={3}
      padding="20px"
      boxShadow="0px 0px 8px 1px rgba(0, 0, 0, 0.1)"
      borderRadius="5px"
      textAlign="center"
      aria-label="product"
    >
      <Box
        display="flex"
        margin="0 auto"
        width="100px"
        height="200px"
        alignItems="center"
        sx={{
          "& img": { objectFit: "cover", width: "100%", maxHeight: "100%" },
        }}
      >
        <img src={product.image} alt={product.title ?? "Product image"} />
      </Box>

      <Box height="70px" overflow="clip">
        <Typography height="50px" overflow="hidden">
          {product.title}
        </Typography>
        <Typography color="darkRed">PRICE: {product.price}</Typography>
      </Box>

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
    </Grid>
  );
};
