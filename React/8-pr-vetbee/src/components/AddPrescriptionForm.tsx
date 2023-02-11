import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMeds } from "./GetMeds";
import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { InputStyled } from "./styles/InputStyled";
import { LabelStyled } from "./styles/LabelStyled";
import { PetForm } from "./styles/PetForm";
import { SecondaryHeader } from "./styles/SecondaryHeader";
import { SelectStyled } from "./styles/SelectStyled";
import { StyledLink } from "./styles/StyledLink";

export const AddPrescriptionForm = () => {
  const { meds } = GetMeds();
  const [newPrescription, setNewPrescription] = useState({
    medication_id: null,
    pet_id: null,
    comment: null,
  });

  const navigate = useNavigate();
  const params = useParams();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPrescription({
      ...newPrescription,
      [prop]: event.target.value,
    });
  };

  const handleSelect = (event: any) => {
    setNewPrescription({
      ...newPrescription,
      medication_id: event.target.value,
    });
  };

  const resetForm = () => {
    setNewPrescription({ medication_id: null, pet_id: null, comment: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions", {
        medication_id: newPrescription.medication_id,
        pet_id: params.id,
        comment: newPrescription.comment,
      })
      .then(() => {
        alert(`Prescription was added`);

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
        <h1>ADD PRESCRIPTION</h1>
      </SecondaryHeader>
      <PetForm onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="medName">Name:</LabelStyled>
          <SelectStyled
            onChange={handleSelect}
            defaultValue={"default"}
            // value={newPrescription.medication_id ?? ""}
          >
            <option value={"default"} disabled>
              Select medication
            </option>
            {meds.map((med: any) => (
              <option value={med.id} key={med.id}>
                {med.name}
              </option>
            ))}
          </SelectStyled>
        </div>
        <div>
          <LabelStyled htmlFor="comment">Comment:</LabelStyled>
          <InputStyled
            name="comment"
            value={newPrescription.comment ?? ""}
            onChange={(event) => handleInputChange(event, "comment")}
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
