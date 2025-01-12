import styled from "styled-components";

export const TextLayout = styled.p<{
  margin: number;
  size: number;
  weight: string | null;
}>`
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size}em;
  margin: ${(props) => props.margin}em 0;
`;
