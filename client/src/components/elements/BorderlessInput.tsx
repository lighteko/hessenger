import { InputLayout } from "@components/layouts/input.layouts";
import { IBorderlessInputProps } from "@interfaces/input.element.interfaces";

const BorderlessInput = (props: IBorderlessInputProps) => {
  return <InputLayout {...props} />;
};

export default BorderlessInput;
