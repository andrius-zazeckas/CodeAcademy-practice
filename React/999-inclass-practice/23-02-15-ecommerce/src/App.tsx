import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { MainRouter } from "./components/MainRouter/MainRouter";
import {
  INITIAL_VALUE,
  ProductsContext,
  productsReducer,
} from "./ProductsContext";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(productsReducer, {
    products: INITIAL_VALUE.products,
    cartProducts: INITIAL_VALUE.cartProducts,
  });

  const getProducts = () => {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const products = getProducts();

    if (Array.isArray(products)) {
      setProducts(products);
    }
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        {isLoading ? <h1>Loading...</h1> : <MainRouter />}
      </ProductsContext.Provider>
    </div>
  );
};
