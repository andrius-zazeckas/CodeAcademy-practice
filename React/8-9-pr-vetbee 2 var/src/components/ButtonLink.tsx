import { useNavigate } from "react-router-dom";
import { ColorButton } from "./styles/ColorButton";

export const ButtonLink = ({ link, message }: any) => {
  const navigate = useNavigate();

  return <ColorButton onClick={() => navigate(link)}>{message}</ColorButton>;
};
