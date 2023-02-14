import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { ProductsContext } from "./components/ProductsContext/ProductsContext";

export const App = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => setProducts(["apple"]), []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Navigation />
      </ProductsContext.Provider>
    </div>
  );
};
