import styled from "styled-components/native";
import { Colors } from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.primary};
  padding: 55px 10px;
`;

export const GameView = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  border-radius: 30px;
`;
