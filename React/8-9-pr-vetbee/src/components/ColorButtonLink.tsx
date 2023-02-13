import { useNavigate } from "react-router-dom";
import { ColorButton } from "./styles/ColorButton";

export const ColorButtonLink = ({ link, message }: any) => {
  const navigate = useNavigate();

  return <ColorButton onClick={() => navigate(link)}>{message}</ColorButton>;
};
