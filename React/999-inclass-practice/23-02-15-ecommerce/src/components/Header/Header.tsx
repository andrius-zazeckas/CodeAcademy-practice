import { StyledLink } from "../../styles/StyledLink";
import { HeaderStyled } from "../../styles/HeaderStyled";
import { useContext } from "react";
import { CartProductsContext } from "../../ProductsContext/CartProductsContext";

export const Header = () => {
  const { cartProducts } = useContext(CartProductsContext);

  let cartCount = 0;

  cartProducts.forEach((product) => {
    cartCount += product.amount;
  });

  return (
    <HeaderStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/cart">Cart {cartCount}</StyledLink>
    </HeaderStyled>
  );
};
