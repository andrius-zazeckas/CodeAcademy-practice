import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import axios from "axios";
import { Product } from "./Product";

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
          <h1>Products</h1>
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
