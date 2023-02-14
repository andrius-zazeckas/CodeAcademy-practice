import { useEffect, useState } from "react";
import "./App.css";
import { DarkModeContext } from "./components/DarkModeContext/DarkModeContext";
import { Navigation } from "./components/Navigation";
import { ProductsContext } from "./components/ProductsContext/ProductsContext";

export const App = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => setProducts(["apple"]), []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Navigation />
      </DarkModeContext.Provider>
    </div>
  );
};
