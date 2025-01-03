import styled from "styled-components";

export const ButtonLayout = styled.button`
  --x: 0px;
  --y: 0px;
  width: 100%;
  margin: 1vh 0 0 0;
  aspect-ratio: 7.2 / 1;
  border-radius: 15px;
  border: 0;
  background-color: #0070f6;
  color: white;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  /* &:active:not(:disabled)::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: white;
    top: var(--y);
    left: var(--x);
    width: 100px;
    height: 100px;
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple-animation 0.6s ease-out;
  }

  @keyframes ripple-animation {
    to {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  } */
  &:disabled {
    background-color: #cdcdcd;
  }
`;
