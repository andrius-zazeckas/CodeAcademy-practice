import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Router } from "./components/Router";
import { CartProductsContext } from "./context/CartProductsContext";
import { ProductsContext } from "./context/ProductsContext";
import { TProducts } from "./types/Tproducts";

export const App = () => {
  const [products, setProducts] = useState<TProducts[]>([]);
  const [cartProducts, setCartProducts] = useState([]);

  const GetProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <CartProductsContext.Provider value={[cartProducts, setCartProducts]}>
          <Router />
        </CartProductsContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};
