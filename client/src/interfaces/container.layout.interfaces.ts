import { ButtonHTMLAttributes } from "react";

export interface ICenterLayoutProps
  extends ButtonHTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
}
