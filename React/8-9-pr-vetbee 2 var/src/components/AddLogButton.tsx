import { useNavigate } from "react-router-dom";
import { TransparentButton } from "./styles/TransparentButton";

export const AddLogButton = ({ params }: any) => {
  const navigate = useNavigate();
  return (
    <TransparentButton onClick={() => navigate(`/add-log/${params.id}`)}>
      ADD LOG
    </TransparentButton>
  );
};
