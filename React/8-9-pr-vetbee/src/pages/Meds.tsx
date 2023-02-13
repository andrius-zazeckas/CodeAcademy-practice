import { ColorButtonLink } from "../components/ColorButtonLink";
import { MedsTable } from "../components/MedsTable";
import { ButtonContainer } from "../components/styles/ButtonContainer";
import { SecondaryHeader } from "../components/styles/SecondaryHeader";

export const Meds = () => {
  return (
    <>
      <SecondaryHeader>
        <h1>Medications</h1>
        <ButtonContainer>
          <ColorButtonLink link={`/add-med`} message="ADD MEDICATION" />
        </ButtonContainer>
      </SecondaryHeader>
      <MedsTable />;
    </>
  );
};
