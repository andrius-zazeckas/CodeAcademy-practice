import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import axios from "axios";
import { Product } from "./Product";
import { ImageList } from "@mui/material";

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
        <h2>Loading</h2>
      ) : (
        <div>
          <ImageList
            cols={3}
            gap={30}
            sx={{
              height: "100%",
              width: 600,
              margin: "auto",
              objectFit: "cover",
            }}
          >
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ImageList>
        </div>
      )}
    </>
  );
};
