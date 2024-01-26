import * as React from "react";
import { Coordinate } from "../../types/types";
import * as S from "./styles";
import { Text } from "react-native";

interface SnakeProps {
  snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
  return (
    <>
      {snake?.map((segment: Coordinate, index: number) => {
        const segmentSyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return (
          <S.SnakeView
            key={index}
            left={segmentSyle.left}
            top={segmentSyle.top}
          />
        );
      })}
    </>
  );
}
