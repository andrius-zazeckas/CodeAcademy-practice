import { useContext } from "react";
import { CartProductsContext } from "../context/CartProductsContext";
import { ProductContainer } from "../styles/ProductContainer";
import { ProductsContainer } from "../styles/ProductsContainer";
import { TransparentButton } from "../styles/TransparentButton";
import { TProducts } from "../types/Tproducts";

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

  const handlePlus = (product: TProducts) => {
    setCartProducts((prevCartProducts: any) => [
      ...prevCartProducts,
      { id: product.id, title: product.title },
    ]);
  };

  const handleMinus = (id: number, i: number) => {
    const removedProduct = cartProducts
      .filter((pr: any) => pr.id === id)
      .slice(0, -1);
    const restProducts = cartProducts.filter((pr: any) => pr.id !== id);
    restProducts.splice(i, 0, ...removedProduct);

    setCartProducts(restProducts);
  };

  return (
    <ProductsContainer>
      {result.map((product: any, i: number) => (
        <ProductContainer key={product.id}>
          <p>{product.title}</p>
          <p>Product count: {product.count}</p>
          <p>Product price: {product.price}</p>
          <p>Sum: {(product.price * product.count).toFixed(2)}</p>
          <TransparentButton onClick={() => handlePlus(product)}>
            +
          </TransparentButton>
          <TransparentButton onClick={() => handleMinus(product.id, i)}>
            -
          </TransparentButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};
