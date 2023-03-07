import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import axios from "axios";
import { Product } from "./Product";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { TProduct } from "../ProductsContext/types";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [shouldShowCheapProducts, setShouldShowCheapProducts] = useState(false);
  const [inexpensiveProducts, setInexpensiveProducts] = useState<TProduct[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const productsToRender = shouldShowCheapProducts
    ? inexpensiveProducts
    : fetchedProducts;

  const handleCheckboxChange = () => {
    setShouldShowCheapProducts(
      (prevShouldShowCheapProducts) => !prevShouldShowCheapProducts
    );

    if (inexpensiveProducts && !inexpensiveProducts.length) {
      setInexpensiveProducts(
        fetchedProducts.filter(
          (fetchedProduct) => (fetchedProduct.price || 0) < 50
        )
      );
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>
        dispatch({
          type: "setProducts",
          payload: { fetchedProducts: res.data },
        })
      )
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      <Box textAlign="center">
        <FormControlLabel
          control={
            <Checkbox
              checked={shouldShowCheapProducts}
              onChange={handleCheckboxChange}
              name="inexpensive products"
            />
          }
          label="Inexpensive Products"
        />
      </Box>

      {isLoading ? (
        <Typography component="h1" variant="h3" padding={2}>
          Loading
        </Typography>
      ) : (
        <Grid
          container
          display="flex"
          justifyContent="center"
          gridTemplateColumns="auto auto auto"
          gap="30px"
          margin="0 auto"
          // width="100%"
        >
          {productsToRender.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </>
  );
};
