import { useEffect, useState } from "react";
import "./App.css";
import { PostProduct } from "./components/PostProduct";
import { PostProductAxios } from "./components/PostProduct-axios-state-obejct";
import { Products } from "./components/Products";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Barbora</h1>
      </header>

      <Products
        products={products}
        isLoading={isLoading}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
      />

      <PostProduct />

      <p>Axios POST with useState as object:</p>
      <PostProductAxios fetchProducts={fetchProducts} />
    </div>
  );
}

export default App;
