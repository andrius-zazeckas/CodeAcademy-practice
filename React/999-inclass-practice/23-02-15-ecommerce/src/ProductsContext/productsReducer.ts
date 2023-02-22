import axios from "axios";
import { useEffect, useState } from "react";
import type { TProductState } from "./types";

const getProducts = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((error) => console.error(error));
  // .finally(() => {
  //   setIsLoading(false);
  // });
};

export const productsReducer = (state: TProductState, action: any) => {
  const newState = { ...state };

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const products = getProducts();

  //   if (Array.isArray(products)) {
  //     setProducts(products);
  //   }
  // }, []);

  switch (action.type) {
    case "setProducts": {
      getProducts().then((res) => {
        console.log({ newState }, "then");

        newState.products = res;
      });

      break;
    }

    case "addCartProduct":
      return { products: state.products, cartProducts: [{}] } as TProductState;
  }

  console.log({ newState }, "pries return");

  return newState;
};
