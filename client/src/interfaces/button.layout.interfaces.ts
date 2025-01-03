import { ButtonHTMLAttributes } from "react";

export interface IButtonLayoutProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  event: React.MouseEvent<HTMLButtonElement>;
}
