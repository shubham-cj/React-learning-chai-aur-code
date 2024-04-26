import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    }
)

export const TheamProvider = ThemeContext.Provider

export default function useTheam(){
    return useContext(ThemeContext)
}