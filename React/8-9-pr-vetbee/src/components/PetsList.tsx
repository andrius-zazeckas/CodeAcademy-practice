import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { PetContainer } from "./styles/PetContainer";
import { TransparentButton } from "./styles/TransparentButton";

export const PetsList = ({ data, fetchData }: any) => {
  const navigate = useNavigate();

  const handleDeletePet = (id: number) => {
    if (window.confirm("Delete Pet?")) {
      axios
        .delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
        .then(() => {
          alert(`Pet deleted successfully`);
          fetchData();
        })
        .catch((error) => console.error(error));
    }
  };

  const handleViewLog = (id: number) => {
    navigate(`/logs/${id}`);
  };

  return (
    <>
      {data.map((pet: any) => (
        <PetContainer key={pet.id}>
          <h3>{pet.name}</h3>
          <p>{new Date(pet.dob).toISOString().split("T")[0]}</p>
          <p>{pet.client_email}</p>
          <ButtonContainer>
            <ColorButton onClick={() => handleViewLog(pet.id)}>
              VIEW LOG
            </ColorButton>
            <TransparentButton onClick={() => handleDeletePet(pet.id)}>
              DELETE
            </TransparentButton>
          </ButtonContainer>
        </PetContainer>
      ))}
    </>
  );
};
