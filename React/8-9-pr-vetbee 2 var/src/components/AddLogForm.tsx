import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { InputStyled } from "./styles/InputStyled";
import { LabelStyled } from "./styles/LabelStyled";
import { PetForm } from "./styles/PetForm";
import { SecondaryHeader } from "./styles/SecondaryHeader";
import { StyledLink } from "./styles/StyledLink";

export const AddLogForm = () => {
  const [newLog, setNewLog] = useState({
    pet_id: null,
    description: null,
    status: null,
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewLog({
      ...newLog,
      [prop]: event.target.value,
    });
  };

  const resetForm = () => {
    setNewLog({ pet_id: null, description: null, status: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/", {
        pet_id: params.id,
        description: newLog.description,
        status: newLog.status,
      })
      .then(() => {
        alert(`Log was added`);

        resetForm();
      })
      .catch((error) => {
        console.error(error.response.data.err);
      });
  };

  return (
    <>
      <SecondaryHeader>
        <h1>ADD LOG</h1>
      </SecondaryHeader>
      <PetForm onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="description">Description:</LabelStyled>
          <InputStyled
            name="description"
            value={newLog.description ?? ""}
            onChange={(event) => handleInputChange(event, "description")}
          />
        </div>

        <div>
          <LabelStyled htmlFor="status">Status:</LabelStyled>
          <InputStyled
            name="status"
            value={newLog.status ?? ""}
            onChange={(event) => handleInputChange(event, "status")}
          />
        </div>

        <ButtonContainer style={{ margin: 20 }}>
          <StyledLink to="" onClick={() => navigate(-1)}>
            Cancel
          </StyledLink>
          <ColorButton type="submit">Submit</ColorButton>
        </ButtonContainer>
      </PetForm>
    </>
  );
};
