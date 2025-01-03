import { ColorModeTypes } from "@shared/enums";
import { createContext } from "react";

export const ColorModeContext = createContext(ColorModeTypes.LIGHT);
