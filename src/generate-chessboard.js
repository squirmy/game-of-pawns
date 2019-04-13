import { flow, partial, times } from 'lodash';
import createChessboard from './create-chessboard';
import placeKings from './place-kings';
import placePiece from './place-piece';

const chooseARandomSquare = emptySquares => {
  const rand = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[rand];
};

export default () => {
  const pieces = [
    partial(placeKings, chooseARandomSquare),
    times(8, () => partial(placePiece, chooseARandomSquare, 'P')),
    times(8, () => partial(placePiece, chooseARandomSquare, 'p'))
  ].flatMap(x => x);

  return flow(pieces)(createChessboard('8/8/8/8/8/8/8/8'));
};
