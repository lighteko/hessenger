import { ButtonHTMLAttributes, RefObject } from "react";

export interface ILoginButtonProps {
  emailRef: RefObject<HTMLInputElement>;
  pwdRef: RefObject<HTMLInputElement>;
}

export interface ISemiRoundedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}
