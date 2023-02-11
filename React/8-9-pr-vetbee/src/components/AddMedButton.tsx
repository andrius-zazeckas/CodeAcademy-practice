import { useNavigate } from "react-router-dom";
import { ColorButton } from "./styles/ColorButton";

export const AddMedButton = () => {
  const navigate = useNavigate();

  return (
    <ColorButton onClick={() => navigate(`/add-med`)}>
      ADD MEDICATION
    </ColorButton>
  );
};
