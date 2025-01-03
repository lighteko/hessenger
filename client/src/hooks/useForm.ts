import { IUseFormProps } from "@interfaces/hook.interfaces";
import useInput from "./useInput";
import { useRef, useState } from "react";

type UseFormReturnType = [
  (event: React.FormEvent<HTMLFormElement>) => void,
  boolean
];

const useForm: (fields: string[]) => UseFormReturnType = (fields: string[]) => {
  const [isValid, setIsValid] = useState(false);
  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    let validity = isValid;
    for (let inputType of fields) {
      const inputObj = event.currentTarget.querySelector(
        `[type='${inputType}']`
      ) as HTMLInputElement;
      validity = inputObj?.value !== "";
    }
    setIsValid(validity);
  };
  return [onChange, !isValid];
};

export default useForm;
