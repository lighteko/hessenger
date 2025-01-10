import styled from "styled-components";

export const InputLayout = styled.input`
  background-color: "#ffffff";
  width: 100%;
  height: 3vh;
  outline: none;
  border: 0;
  &::placeholder {
    color: "#687888";
    letter-spacing: 0px;
  }
  &::selection {
    color: "#000000";
    background-color: "#A9C3FB";
  }
  &[name="password"] {
    width: calc(100% - 20px);
  }
  &[type="password"] {
    letter-spacing: 5px;
  }
`;
