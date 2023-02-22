import { useContext } from "react";
// import { CartProductsContext } from "../../ProductsContext/CartProductsContext";
import { ProductsContext } from "../../ProductsContext/ProductsContext";
import { ProductContainer } from "../../styles/ProductContainer";
import { ProductsContainer } from "../../styles/ProductsContainer";
import { TransparentButton } from "../../styles/TransparentButton";

export const Products = () => {
  // const { products } = useContext(ProductsContext);
  // const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  // const handleClick = (productIndex: number) => {
  //   const product = products[productIndex];
  //   const isProductInCart = cartProducts.some(
  //     (cartProduct) => cartProduct.id === product.id
  //   );

  //   if (isProductInCart) {
  //     return setCartProducts((prevCartProducts) => {
  //       const newCartProducts = prevCartProducts.map((cartProduct) => ({
  //         ...cartProduct,
  //         amount:
  //           cartProduct.id === product.id
  //             ? cartProduct.amount + 1
  //             : cartProduct.amount,
  //       }));

  //       return newCartProducts;
  //     });
  //   }

  //   setCartProducts([...cartProducts, { ...product, amount: 1 }]);
  // };

  return (
    <ProductsContainer>
      {/* {products.map((product, i) => (
        <ProductContainer key={product.id}>
          <img src={product.image} alt={`Product ${product.title}`} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <TransparentButton onClick={() => handleClick(i)}>
            Buy
          </TransparentButton>
        </ProductContainer> */}
      {/* ))} */}
    </ProductsContainer>
  );
};
