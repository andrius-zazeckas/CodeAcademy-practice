import { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeContext/DarkModeContext";
import { ColorButton } from "./styles/ColorButton";
import { TransparentButton } from "./styles/TransparentButton";

export const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {!darkMode ? (
        <ColorButton onClick={toggleDarkMode}>Off</ColorButton>
      ) : (
        <TransparentButton onClick={toggleDarkMode}>On</TransparentButton>
      )}
    </>
  );
};
