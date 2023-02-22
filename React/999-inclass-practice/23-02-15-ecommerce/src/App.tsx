import { useReducer } from "react";
import {
  INITIAL_VALUE,
  ProductsContext,
  productsReducer,
} from "./ProductsContext";
import "./App.css";

export const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(productsReducer, {
    products: INITIAL_VALUE.products,
    cartProducts: INITIAL_VALUE.cartProducts,
  });

  return (
    <div className="App">
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <button onClick={() => dispatch({ type: "setProducts" })}>
          Increment age
        </button>

        {/* {isLoading ? <h1>Loading...</h1> : <MainRouter />} */}
      </ProductsContext.Provider>
    </div>
  );
};
