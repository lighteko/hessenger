import styled from "styled-components";

export const ButtonLayout = styled.button`
  width: 100%;
  margin: 1vh 0 0 0;
  aspect-ratio: 7.2 / 1;
  border-radius: 15px;
  border: 0;
  background-color: #0070f6;
  color: white;
  font-size: 1em;
  text-align: center;
  &:disabled {
    background-color: #cdcdcd;
  }
`;

export const RoundedButtonLayout = styled(ButtonLayout)`
  border-radius: 1000px;
`;
