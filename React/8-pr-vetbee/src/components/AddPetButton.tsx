import { useNavigate } from "react-router-dom";
import { ColorButton } from "./styles/ColorButton";

export const AddPetButton = () => {
  const navigate = useNavigate();
  return (
    <ColorButton onClick={() => navigate("/add-pet")}>ADD PET</ColorButton>
  );
};
