import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer";
import { ColorButton } from "./styles/ColorButton";
import { FilterContainer } from "./styles/FilterContainer";
import { TransparentButton } from "./styles/TransparentButton";

export const LogsFilter = ({
  isLogs,
  isPrescriptions,
  isActive,
  setIsActive,
}: any) => {
  const [isLogsBtnActive, setIsLogsBtnActive] = useState(true);
  const [isPrescBtnActive, setIsPrescBtnActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLogBtnActive = () => {
    setIsLogsBtnActive(!isLogsBtnActive);
  };

  const handlePrescBtnActive = () => {
    setIsPrescBtnActive(!isPrescBtnActive);
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
              <>
                {isLogsBtnActive ? (
                  <ColorButton
                    onClick={() => {
                      handleClick();
                      handleLogBtnActive();
                    }}
                  >
                    Logs
                  </ColorButton>
                ) : (
                  <TransparentButton
                    onClick={() => {
                      handleClick();
                      handleLogBtnActive();
                    }}
                  >
                    Logs
                  </TransparentButton>
                )}
              </>
            )}
            {isPrescriptions ? (
              <></>
            ) : (
              <>
                {isPrescBtnActive ? (
                  <ColorButton
                    onClick={() => {
                      handleClick();
                      handlePrescBtnActive();
                    }}
                  >
                    Prescriptions
                  </ColorButton>
                ) : (
                  <TransparentButton
                    onClick={() => {
                      handleClick();
                      handlePrescBtnActive();
                    }}
                  >
                    Prescriptions
                  </TransparentButton>
                )}
              </>
            )}
          </ButtonContainer>
        </FilterContainer>
      )}
    </>
  );
};
