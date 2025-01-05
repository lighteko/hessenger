import { RefObject, useRef, useState } from "react";

type UseInputReturnType = [
  RefObject<HTMLInputElement | null>,
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: (
  subscriber?: (event: React.ChangeEvent<HTMLInputElement>) => void
) => UseInputReturnType = (subscriber) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    subscriber && subscriber(event);
    setValue(event.target.value);
  };
  return [ref, value, handler];
};

export default useInput;
