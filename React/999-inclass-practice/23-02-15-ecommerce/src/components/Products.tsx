import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";

export const Products = () => {
  const products = useContext(ProductsContext);

  const [cartProducts, setCartProducts] = useState<any[]>([]);

  const handleClick = (product: any) => {
    setCartProducts((prevCartProducts) => [
      ...prevCartProducts,
      { id: product.id, title: product.title, price: product.price },
    ]);
  };

  console.log(cartProducts);

  return (
    <>
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
    </>
  );
};
