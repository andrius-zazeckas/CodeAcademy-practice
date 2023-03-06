import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import axios from "axios";
import { Product } from "./Product";
import { Grid, Typography } from "@mui/material";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);

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
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </>
  );
};
