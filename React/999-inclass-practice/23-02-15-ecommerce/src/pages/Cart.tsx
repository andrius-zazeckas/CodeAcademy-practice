import { useContext } from "react";
import { CartProductsContext } from "../ProductsContext/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handlePlus = (productIndex: number) => {
    const product = cartProducts[productIndex];
    // const isProductInCart = cartProducts.some(
    //   (cartProduct) => cartProduct.id === product.id
    // );

    product.amount = ++product.amount;

    // if (isProductInCart) {
    //   return setCartProducts((prevCartProducts) => {
    //     const newCartProducts = prevCartProducts.map((cartProduct) => ({
    //       ...cartProduct,
    //       amount:
    //         cartProduct.id === product.id
    //           ? cartProduct.amount + 1
    //           : cartProduct.amount,
    //     }));
    //     return newCartProducts;
    //   });
    // }

    setCartProducts([...cartProducts]);
  };

  const handleMinus = (productIndex: number) => {
    const product = cartProducts[productIndex];

    product.amount -= 1;

    if (product.amount === 0) {
      cartProducts.splice(productIndex, 1);

      return setCartProducts([...cartProducts]);
    }

    setCartProducts([...cartProducts]);
  };

  return (
    <ProductsContainer>
      {cartProducts.map((product: any, i: number) => (
        <ProductContainer key={product.id}>
          <p>{product.title}</p>
          <p>Product amount: {product.amount}</p>
          <p>Product price: {product.price}</p>
          <p>Sum: {(product.price * product.amount).toFixed(2)}</p>
          <TransparentButton onClick={() => handlePlus(i)}>+</TransparentButton>
          <TransparentButton onClick={() => handleMinus(i)}>
            -
          </TransparentButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};
