import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { MainRouter } from "./components/MainRouter/MainRouter";
import { CartProductsContext } from "./ProductsContext/CartProductsContext";
import { ProductsContext } from "./ProductsContext/ProductsContext";
import { TCartProduct } from "./types/TCartProduct";
import { TProduct } from "./types/TProduct";

export const App = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<TCartProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
          {isLoading ? <h1>Loading...</h1> : <MainRouter />}
        </CartProductsContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};
