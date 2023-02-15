import { Link, useLocation } from "react-router-dom";
import { DarkModeButton } from "./DarkModeButton";
import { HeaderStyled } from "./styles/HeaderStyled";
import { LogoStyled } from "./styles/LogoStyled";
import { StyledLink } from "./styles/StyledLink";
import logo from "../logo.png";

const MedsLink = <StyledLink to="/meds">Medications</StyledLink>;
const LogsLink = <StyledLink to="#">Logs</StyledLink>;

export const Header = () => {
  const { pathname } = useLocation();
  const isOnLogsLink = pathname.includes("/logs");

  return (
    <HeaderStyled>
      <Link to="/">
        <LogoStyled src={logo} alt="logo" />
      </Link>
      <div>
        <span>Dark Mode: </span>
        <DarkModeButton />
      </div>

      <div>
        <StyledLink to="/">Pets</StyledLink>

        {pathname === "/" ? MedsLink : null}
        {isOnLogsLink ? LogsLink : null}
      </div>
    </HeaderStyled>
  );
};
