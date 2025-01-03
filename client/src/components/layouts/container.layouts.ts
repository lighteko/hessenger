import { ICenterLayoutProps } from "@interfaces/container.layout.interfaces";
import { styled } from "styled-components";

export const CenterLayout = styled.div<ICenterLayoutProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 1.5vh 0;
  font-size: 12px;
`;
