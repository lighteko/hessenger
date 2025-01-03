import { ColorModeTypes } from "@shared/enums";
import { InputHTMLAttributes } from "react";


export interface IInputLayoutProps extends InputHTMLAttributes<HTMLInputElement> {
  colormode: ColorModeTypes;
}