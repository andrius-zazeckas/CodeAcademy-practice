import { useNavigate } from "react-router-dom";
import { ColorButton } from "./styles/ColorButton";

export const AddPrescriptionButton = ({ params }: any) => {
  const navigate = useNavigate();

  return (
    <ColorButton onClick={() => navigate(`/add-prescription/${params.id}`)}>
      ADD PRESCRIPTION
    </ColorButton>
  );
};
