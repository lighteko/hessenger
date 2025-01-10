import { useState } from "react";

type UseFormReturnType = [
  (event: React.FormEvent<HTMLFormElement>) => void,
  boolean
];

const useForm: (fields: string[]) => UseFormReturnType = (fields) => {
  const [disabled, setDisabled] = useState(true);

  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    const inputs = Array.from(event.currentTarget.elements) as HTMLInputElement[];
    const validity = fields.every((field) =>
      inputs.some((input) => input.type === field && input.value.trim() === "")
    );
    setDisabled(validity);
  };

  return [onChange, disabled];
};

export default useForm;