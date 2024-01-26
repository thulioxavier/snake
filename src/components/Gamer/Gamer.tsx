import * as React from "react";
import * as S from "./styles";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  Bound,
  Coordinate,
  Direction,
  GestureEventType,
} from "../../types/types";
import Snake from "../Snake/Snake";

const SNAKE_INITIAL_POSITION: Coordinate[] = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION: Coordinate[] = [{ x: 5, y: 20 }];

const GAME_BOUNDS: Bound = { xMin: 0, XMax: 35, tMin: 0, yMax: 63 };
const MOVE_INTERVAL: number = 50;
const SCORE_INCREMENT: number = 10;

export default function Gamer(): JSX.Element {
  const [direction, setDirection] = React.useState<Direction>(Direction.Right);
  const [snake, setSnake] = React.useState<Coordinate[]>(
    SNAKE_INITIAL_POSITION
  );
  const [food, setFood] = React.useState<Coordinate[]>(FOOD_INITIAL_POSITION);

  const [isGamerOver, setIsGamerOver] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isGamerOver) {
      const intervalId = setInterval(() => {
        !isPaused && moveSnake();
      }, MOVE_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [snake, direction, isGamerOver, isPaused]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead };

    console.log(direction, "opa");
    switch (direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
      default:
        break;
    }

    setSnake([newHead, ...snake]);
  };

  const handlerGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;

    const TRANSLATION_X = Math.abs(translationX);
    const TRANSLATION_Y = Math.abs(translationY);

    if (TRANSLATION_X > TRANSLATION_Y) {
      if (translationX > 0) {
        setDirection(Direction.Right);
      }

      if (translationX < 0) {
        setDirection(Direction.Left);
      }
    } else {
      if (translationY > 0) {
        setDirection(Direction.Down);
      }

      if (translationY < 0) {
        setDirection(Direction.Up);
      }
    }
  };

  return (
    <PanGestureHandler onGestureEvent={handlerGesture}>
      <S.Container>
        <S.GameView>
          <Snake snake={snake} />
        </S.GameView>
      </S.Container>
    </PanGestureHandler>
  );
}
