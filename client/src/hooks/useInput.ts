import { useState } from "react";

type UseInputReturnType = [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: () => UseInputReturnType = () => {
  const [value, setValue] = useState("");
  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return [value, handler];
};

export default useInput;
