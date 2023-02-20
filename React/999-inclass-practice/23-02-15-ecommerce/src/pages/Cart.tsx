import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { CartProductsContext } from "../ProductsContext/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";
import { TProduct } from "../types/TProduct";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);
  // const { products, setProducts } = useContext(ProductsContext);

  console.log(cartProducts);

  const handlePlus = (productIndex: number) => {
    const product = cartProducts[productIndex];
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );
    // console.log(product);
    console.log(product.amount);

    if (isProductInCart) {
      return setCartProducts((prevCartProducts) => {
        const newCartProducts = prevCartProducts.map((cartProduct) => ({
          ...cartProduct,
          amount:
            cartProduct.id === product.id
              ? cartProduct.amount + 1
              : cartProduct.amount,
        }));
        return newCartProducts;
      });
    }

    setCartProducts([...cartProducts, { ...product, amount: 1 }]);
  };

  const handleMinus = (productIndex: number) => {
    const product = cartProducts[productIndex];
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );

    console.log(product.amount);

    if (isProductInCart && product.amount >= 1) {
      return setCartProducts((prevCartProducts) => {
        const newCartProducts = prevCartProducts.map((cartProduct) => ({
          ...cartProduct,
          amount:
            cartProduct.id === product.id
              ? cartProduct.amount - 1
              : cartProduct.amount,
        }));
        return newCartProducts;
      });
    }

    cartProducts.splice(productIndex, 1);

    setCartProducts([...cartProducts]);
  };

  // const handlePlus = (product: TProduct) => {
  //   setCartProducts((prevCartProducts: any) => [...prevCartProducts, product]);
  // };

  // const handleMinus = (id: number, i: number) => {
  //   const removeProduct = cartProducts
  //     .filter((pr: any) => pr.id === id)
  //     .slice(0, -1);
  //   const restProducts = cartProducts.filter((pr: any) => pr.id !== id);
  //   restProducts.splice(i, 0, ...removeProduct);

  //   setCartProducts(restProducts);
  // };

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
