import { Grid, Typography, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ProductActionButton } from "../Products/ProductActionButton";
import { ProductsContext } from "../ProductsContext";

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);
  const [isCartEmpty, setIsCartEmpty] = useState(!cartProducts.length);

  const currencyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      (curPrice + (cartProduct.price || 0)) * cartProduct.amount,
    0
  );

  useEffect(() => {
    setIsCartEmpty(!cartProducts.length);
  }, [cartProducts]);

  // ToDo: material ui list (DataGrid)

  return (
    <Box aria-label="cart">
      {isCartEmpty ? (
        <Typography component="h3" textAlign="center" fontSize="30px" my="20px">
          No products in cart
        </Typography>
      ) : (
        <Box>
          <Grid container>
            {cartProducts.map((product) => (
              <Grid
                container
                item
                justifyContent="space-between"
                bgcolor="beige"
                borderBottom="1px solid black"
                width="80%"
                mx="auto"
                padding="20px"
                // textAlign="center"
                aria-label="cart product"
                sx={{ "& .MuiTypography-root": { fontSize: "20px" } }}
                key={product.id}
              >
                <Grid item xs={6}>
                  <Typography>{product.title}</Typography>
                </Grid>

                <Grid item xs={3} display="flex" gap="20px">
                  <ProductActionButton
                    color="success"
                    title="+"
                    type="addProduct"
                    productId={product.id}
                    label="add product"
                  />

                  <Typography textAlign="center" aria-label="product amount">
                    {product.amount}
                  </Typography>

                  <ProductActionButton
                    color="error"
                    title="-"
                    type="removeProduct"
                    productId={product.id}
                    label="remove product"
                  />
                </Grid>
                <Grid item xs={3}>
                  {product.price ? (
                    <Typography textAlign="right">
                      {currencyFormat.format(product.price)}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="20px"
          >
            <Typography variant="h4">Total price:&nbsp;</Typography>
            <Typography variant="h4" aria-label="total price">
              {currencyFormat.format(totalPrice)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
