import { useContext, useReducer } from "react";
// import { CartProductsContext } from "../ProductsContext/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      // const modifiedProducts = [...state];
      // const product = modifiedProducts[action.payload];
      // product.amount += 1;
      return { ...state, [action.amount]: state.amount + 1 };

    case "decrement":
      return { ...state, amount: state.amount - 1 };

    default:
      return state;
  }
};

export const Cart = () => {
  // const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  // const [state, dispatch] = useReducer(reducer, cartProducts);
  // console.log(state);
  // console.log(cartProducts);
  // const handleIncrement = (productIndex: number) => {
  //   const modifiedProducts = [...cartProducts];
  //   const product = modifiedProducts[productIndex];

  //   product.amount = ++product.amount;

  //   setCartProducts(modifiedProducts);
  // };

  // const handleDecrement = (productIndex: number) => {
  //   const modifiedProducts = [...cartProducts];
  //   const product = modifiedProducts[productIndex];

  //   product.amount -= 1;

  //   if (!product.amount) {
  //     cartProducts.splice(productIndex, 1);

  //     return setCartProducts([...cartProducts]);
  //   }

  //   setCartProducts(modifiedProducts);
  // };

  return (
    <ProductsContainer>
      {/* {state.map((product: any, i: number) => (
        <ProductContainer key={product.id}>
          <p>{product.title}</p>
          <p>Product amount: {product.amount}</p>
          {product.price ? (
            <>
              <p>Product price: {product.price}</p>
              <p>Sum: {(product.price * product.amount).toFixed(2)}</p>
            </>
          ) : null}
        
          <TransparentButton
            onClick={() =>
              dispatch({
                type: "increment",
                payload: i,
                amount: product.amount,
              })
            }
          >
            +
          </TransparentButton>
          <TransparentButton onClick={() => dispatch({ type: "decrement" })}>
            -
          </TransparentButton>
        </ProductContainer>
      ))} */}
    </ProductsContainer>
  );
};

{
  /* <TransparentButton onClick={() => handleIncrement(i)}>+</TransparentButton>
          <TransparentButton onClick={() => handleDecrement(i)}>
            -
          </TransparentButton> */
}
