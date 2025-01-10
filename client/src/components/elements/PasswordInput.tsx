import ViewPasswordIcon from "./ViewPasswordIcon";
import { InputLayout } from "@components/layouts/input.layouts";
import { CenterLayout } from "@components/layouts/container.layouts";
import { IPasswordInputProps } from "@interfaces/input.element.interfaces";
import useInput from "@hooks/useInput";

const PasswordInput = (props: IPasswordInputProps) => {
  const [ref, value, handler] = useInput();
  return (
    <CenterLayout width="100%" height="3vh">
      <InputLayout
        name="password"
        type="password"
        placeholder="Password"
        ref={ref}
        value={value}
        onChange={handler}
        {...props}
      />
      <ViewPasswordIcon ref={ref} />
    </CenterLayout>
  );
};

export default PasswordInput;
