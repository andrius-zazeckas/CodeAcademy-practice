import { createContext } from "react";

export type TDark = {
  darkMode: boolean;
  toggleDarkMode?: () => void;
};

const defaultState = {
  darkMode: false,
};

export const DarkModeContext = createContext<TDark>(defaultState);
