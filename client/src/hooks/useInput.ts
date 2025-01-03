import { RefObject, useRef, useState } from "react";

type UseInputReturnType = [
  RefObject<HTMLInputElement | null>,
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: () => UseInputReturnType = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return [ref, value, handler];
};

export default useInput;
