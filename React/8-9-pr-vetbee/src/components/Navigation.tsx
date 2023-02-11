import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AddLog } from "../AddLog";
import { AddMed } from "../AddMed";
import { AddPet } from "../AddPet";
import { AddPrescription } from "../AddPrescription";
import { Home } from "../Home";
import { Logs } from "../Logs";
import { Meds } from "../Meds";
import { BottomBorder } from "./styles/BottomBorder";
import { HeaderStyled } from "./styles/HeaderStyled";
import { LogoStyled } from "./styles/LogoStyled";
import { StyledLink } from "./styles/StyledLink";
import { Wrapper } from "./styles/Wrapper";

export const Navigation = () => {
  const { pathname } = useLocation();

  const medsLink = <StyledLink to="/meds">Medications</StyledLink>;
  const petsLink = <StyledLink to="/">Pets</StyledLink>;
  const logsLink = <StyledLink to="#">Logs</StyledLink>;

  return (
    <>
      <Wrapper>
        <HeaderStyled>
          <Link to="/">
            <LogoStyled src="logo.png" alt="logo" />
          </Link>
          <div>
            {petsLink}
            {pathname === "/" ? medsLink : ""}
            {pathname.includes("/logs") ? logsLink : ""}
          </div>
        </HeaderStyled>
      </Wrapper>

      <BottomBorder></BottomBorder>

      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs/:id" element={<Logs />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/add-prescription/:id" element={<AddPrescription />} />
          <Route path="/meds" element={<Meds />} />
          <Route path="/add-med" element={<AddMed />} />
          <Route path="/add-log/:id" element={<AddLog />} />
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Wrapper>
    </>
  );
};
