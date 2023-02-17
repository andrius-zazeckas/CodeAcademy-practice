import { useContext } from "react";
import { CartProductsContext } from "../context/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";

export const Cart = () => {
  const [cartProducts, setCartProducts] = useContext(CartProductsContext);

  const result = [
    ...cartProducts
      .reduce((mp: any, o: any) => {
        if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 });
        mp.get(o.id).count++;
        return mp;
      }, new Map())
      .values(),
  ];

  console.log(result.map((p: any) => p.price));
  console.log(cartProducts);

  const handlePlus = () => {
    cartProducts.push();
  };

  return (
    <ProductsContainer>
      {result.map((product: any, i: number) => (
        <ProductContainer key={product.id}>
          <p>{product.title}</p>
          <p>Product count: {product.count}</p>
          <p>Sum: {product.price * product.count}</p>
          <TransparentButton onClick={handlePlus}>+</TransparentButton>
          <TransparentButton>-</TransparentButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};
