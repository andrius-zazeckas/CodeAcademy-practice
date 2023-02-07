import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "../Home";
import { Pets } from "../Pets";
import { BottomBorder } from "./styles/BottomBorder";
import { HeaderStyled } from "./styles/HeaderStyled";
import { LogoStyled } from "./styles/LogoStyled";
import { StyledLink } from "./styles/StyledLink";
import { Wrapper } from "./styles/Wrapper";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <HeaderStyled>
          <Link to="/">
            <LogoStyled src="logo.png" alt="logo" />
          </Link>
          <StyledLink to="/pets">Pets</StyledLink>
        </HeaderStyled>
      </Wrapper>

      <BottomBorder></BottomBorder>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
