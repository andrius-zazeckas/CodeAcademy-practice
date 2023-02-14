import { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeContext/DarkModeContext";
import { ColorButton } from "./styles/ColorButton";
import { TransparentButton } from "./styles/TransparentButton";

export const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const changeTheme = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "rgb(83, 87, 95)";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "black";
    }
  };

  changeTheme();

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
