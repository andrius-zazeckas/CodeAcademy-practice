import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AddPet } from "../AddPet";
import { Home } from "../Home";
import { Logs } from "../Logs";
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
          <div>
            <StyledLink to="/">Pets</StyledLink>
            <StyledLink to="/medications">Medications</StyledLink>
          </div>
        </HeaderStyled>
      </Wrapper>

      <BottomBorder></BottomBorder>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs/:id" element={<Logs />} />
          <Route path="/add-pet" element={<AddPet />} />
          {/* <Route path="/medications" element={<Meds />} /> */}
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
