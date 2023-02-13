import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { SecondaryHeader } from "./styles/SecondaryHeader";
import { PetForm } from "./styles/PetForm";
import { LabelStyled } from "./styles/LabelStyled";
import { InputStyled } from "./styles/InputStyled";
import axios from "axios";
import { useState } from "react";
import { StyledLink } from "./styles/StyledLink";
import { useNavigate } from "react-router-dom";

export const AddMedForm = () => {
  const [newMed, setNewMed] = useState({
    name: null,
    description: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewMed({
      ...newMed,
      [prop]: event.target.value,
    });
  };

  const resetForm = () => {
    setNewMed({ name: null, description: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/meds", {
        name: newMed.name,
        description: newMed.description,
      })
      .then(() => {
        alert(`Medication was added`);

        resetForm();
      })
      .catch((error) => {
        // alert(error.response.data.err);
        console.error(error.response.data.err);
      });
  };

  return (
    <>
      <SecondaryHeader>
        <h1>ADD MEDICATION</h1>
      </SecondaryHeader>
      <PetForm onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="medName">Name:</LabelStyled>
          <InputStyled
            name="medName"
            value={newMed.name ?? ""}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </div>
        <div>
          <LabelStyled htmlFor="description">Description:</LabelStyled>
          <InputStyled
            name="description"
            value={newMed.description ?? ""}
            onChange={(event) => handleInputChange(event, "description")}
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
