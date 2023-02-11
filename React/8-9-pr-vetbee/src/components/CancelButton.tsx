import { useNavigate } from "react-router-dom";
import { CancelButtonStyled } from "./styles/CancelButtonStyled";

export const CancelButton = () => {
  const navigate = useNavigate();
  return (
    <CancelButtonStyled onClick={() => navigate(-1)}>Cancel</CancelButtonStyled>
  );
};
