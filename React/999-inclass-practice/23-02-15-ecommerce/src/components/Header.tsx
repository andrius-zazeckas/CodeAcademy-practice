import { StyledLink } from "../styles/StyledLink";
import { HeaderStyled } from "../styles/HeaderStyled";
import { useContext } from "react";
import { CartProductsContext } from "../context/CartProductsContext";

export const Header = () => {
  const [cartProducts] = useContext(CartProductsContext);

  return (
    <HeaderStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/cart">Cart {cartProducts.length}</StyledLink>
    </HeaderStyled>
  );
};
