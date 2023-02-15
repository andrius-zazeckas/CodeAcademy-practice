import { useState } from "react";
import "./App.css";
import { DarkModeContext } from "./components/DarkModeContext/DarkModeContext";
import { Router } from "./components/Router";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Router />
      </DarkModeContext.Provider>
    </div>
  );
};
