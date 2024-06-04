import { useContext } from "react";
import { ThemeModeProviderContext } from "./theme_modes_provider";


export const useThemeMode = () => useContext(ThemeModeProviderContext);


