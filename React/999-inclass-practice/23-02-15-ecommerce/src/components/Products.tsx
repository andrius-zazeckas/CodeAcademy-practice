import { useContext } from "react";
import { CartProductsContext } from "../context/CartProductsContext";
import { ProductsContext } from "../context/ProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";
import { TProducts } from "../types/Tproducts";

export const Products = () => {
  const products = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useContext(CartProductsContext);

  const handleClick = (product: TProducts) => {
    setCartProducts((prevCartProducts: any) => [...prevCartProducts, product]);
  };

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <img src={product.image} alt={`Product ${product.title}`} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <TransparentButton onClick={() => handleClick(product)}>
            Buy
          </TransparentButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};
