import { useContext } from "react";
import { CartProductsContext } from "../ProductsContext/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handlePlus = (productIndex: number) => {
    const modifiedProducts = [...cartProducts];
    const product = modifiedProducts[productIndex];

    product.amount = ++product.amount;

    setCartProducts(modifiedProducts);
  };

  const handleMinus = (productIndex: number) => {
    const modifiedProducts = [...cartProducts];
    const product = modifiedProducts[productIndex];

    product.amount -= 1;

    if (!product.amount) {
      cartProducts.splice(productIndex, 1);

      return setCartProducts([...cartProducts]);
    }

    setCartProducts(modifiedProducts);
  };

  return (
    <ProductsContainer>
      {cartProducts.map((product, i: number) => (
        <ProductContainer key={product.id}>
          <p>{product.title}</p>
          <p>Product amount: {product.amount}</p>
          {product.price ? (
            <>
              <p>Product price: {product.price}</p>
              <p>Sum: {(product.price * product.amount).toFixed(2)}</p>
            </>
          ) : null}
          <TransparentButton onClick={() => handlePlus(i)}>+</TransparentButton>
          <TransparentButton onClick={() => handleMinus(i)}>
            -
          </TransparentButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};
