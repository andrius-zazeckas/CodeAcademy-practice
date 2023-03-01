import { useReducer } from "react";
import { ProductsContext, MainRouter, productsReducer } from "./components";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  const x = process.env.REACT_APP_SECRET_VALUE;

  return (
    <div>
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductsContext.Provider>
    </div>
  );
};
