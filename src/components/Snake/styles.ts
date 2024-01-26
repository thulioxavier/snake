import styled from "styled-components/native";
import { Colors } from "../../styles/colors";

export const SnakeView = styled.View<{ left: number; top: number }>`
  width: 15px;
  height: 15px;
  border-radius: 7px;
  background-color: ${Colors.primary};
  position: absolute;

  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`;
