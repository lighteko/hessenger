import useInput from "@hooks/useInput";
import ViewPasswordIcon from "./ViewPasswordIcon";
import { InputLayout } from "@components/layouts/input.layouts";
import { useContext } from "react";
import { ColorModeContext } from "@contexts/colormode.context";
import { CenterLayout } from "@components/layouts/container.layouts";

const PasswordInput = () => {
  const [ref, value, handler] = useInput();
  return (
    <CenterLayout width="100%" height="3vh">
      <InputLayout
        name="password"
        type="password"
        placeholder="Password"
        value={value}
        onChange={handler}
        ref={ref}
      />
      <ViewPasswordIcon ref={ref} />
    </CenterLayout>
  );
};

export default PasswordInput;
