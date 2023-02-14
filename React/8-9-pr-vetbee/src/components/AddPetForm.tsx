import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { SecondaryHeader } from "./styles/SecondaryHeader";
import { PetForm } from "./styles/PetForm";
import { LabelStyled } from "./styles/LabelStyled";
import { InputStyled } from "./styles/InputStyled";
import axios from "axios";
import { useContext, useState } from "react";
import { StyledLink } from "./styles/StyledLink";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./ProductsContext/ProductsContext";

export const AddPetForm = () => {
  const products = useContext(ProductsContext);
  console.log(products);

  const [newPet, setNewPet] = useState({
    name: null,
    dob: null,
    client_email: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPet({
      ...newPet,
      [prop]: event.target.value,
    });
  };

  const resetForm = () => {
    setNewPet({ name: null, dob: null, client_email: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
        name: newPet.name,
        dob: newPet.dob,
        client_email: newPet.client_email,
      })
      .then(() => {
        alert(`Pet was added`);

        resetForm();
      })
      .catch((error) => {
        console.error(error.response.data.err);
      });
  };

  return (
    <>
      <SecondaryHeader>
        <h1>ADD PET</h1>
      </SecondaryHeader>
      <PetForm onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="petsName">Pets name:</LabelStyled>
          <InputStyled
            name="petsName"
            value={newPet.name ?? ""}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </div>
        <div>
          <LabelStyled htmlFor="dob">Pets date of birth:</LabelStyled>
          <InputStyled
            name="dob"
            type="date"
            value={newPet.dob ?? ""}
            onChange={(event) => handleInputChange(event, "dob")}
          />
        </div>
        <div>
          <LabelStyled htmlFor="email">Clients email:</LabelStyled>
          <InputStyled
            name="email"
            type="email"
            value={newPet.client_email ?? ""}
            onChange={(event) => handleInputChange(event, "client_email")}
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
