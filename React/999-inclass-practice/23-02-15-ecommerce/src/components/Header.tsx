import { StyledLink } from "../styles/StyledLink";
import { HeaderStyled } from "../styles/HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/cart">Cart</StyledLink>
    </HeaderStyled>
  );
};
