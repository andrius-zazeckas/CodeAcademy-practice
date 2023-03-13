import { Grid, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { ProductActionButton } from "../Products/ProductActionButton";
import { ProductsContext } from "../ProductsContext";

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);
  const currencyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      (curPrice + (cartProduct.price || 0)) * cartProduct.amount,
    0
  );

  // ToDo: material ui list (DataGrid)

  return (
    <Box aria-label="cart">
      <ul>
        {cartProducts.map((product) => (
          <Grid
            container
            justifyContent="space-between"
            bgcolor="beige"
            borderBottom="1px solid black"
            width="80%"
            mx="auto"
            padding="20px"
            // textAlign="center"
            component="li"
            sx={{ "& .MuiTypography-root": { fontSize: "20px" } }}
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
              />

              <Typography textAlign="center" aria-label="product amount">
                {product.amount}
              </Typography>

              <ProductActionButton
                color="error"
                title="-"
                type="removeProduct"
                productId={product.id}
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
      </ul>
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">Total price:&nbsp;</Typography>
        <Typography variant="h4" aria-label="total price">
          {currencyFormat.format(totalPrice)}
        </Typography>
      </Box>
    </Box>
  );
};
