import { useNavigate } from "react-router-dom";
import { TransparentButton } from "./styles/TransparentButton";

export const TransparentButtonLink = ({ link, message }: any) => {
  const navigate = useNavigate();

  return (
    <TransparentButton onClick={() => navigate(link)}>
      {message}
    </TransparentButton>
  );
};
