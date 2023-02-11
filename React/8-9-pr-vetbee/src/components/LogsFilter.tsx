import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { FilterContainer } from "./styles/FilterContainer";

export const LogsFilter = ({
  isLogs,
  isPrescriptions,
  isActive,
  setIsActive,
}: any) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {!isLogs && !isPrescriptions ? (
        <></>
      ) : (
        <FilterContainer>
          <h3>Display: </h3>
          <ButtonContainer>
            {!isLogs ? (
              <></>
            ) : (
              <ColorButton onClick={handleClick}>Logs</ColorButton>
            )}
            {!isPrescriptions ? (
              <></>
            ) : (
              <ColorButton>Prescriptions</ColorButton>
            )}
          </ButtonContainer>
        </FilterContainer>
      )}
    </>
  );
};
