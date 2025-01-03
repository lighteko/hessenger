import { InputLayout } from "@components/layouts/input.layouts";
import { ColorModeContext } from "@contexts/colormode.context";
import useInput from "@hooks/useInput";
import { InputHTMLAttributes, useContext } from "react";

const BorderlessInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [ref, value, handler] = useInput();
  return <InputLayout ref={ref} value={value} onChange={handler} {...props} />
};

export default BorderlessInput;
