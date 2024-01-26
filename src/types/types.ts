import { GestureEvent } from "react-native-gesture-handler";

export interface GestureEventType {
  nativeEvent: { translationX: number; translationY: number };
}

export interface Coordinate {
  x: number;
  y: number;
}

export enum Direction {
  Left = "Left",
  Up = "Up",
  Right = "Right",
  Down = "Down",
}

export interface Bound {
  xMin: number;
  XMax: number;
  tMin: number;
  yMax: number;
}
