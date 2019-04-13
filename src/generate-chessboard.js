import { flow, partial, times } from 'lodash';
import createChessboard from './create-chessboard';
import placePiece from './place-piece';

const chooseARandomSquare = emptySquares => {
  const rand = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[rand];
};

export default () => {
  const pieces = [
    partial(placePiece, chooseARandomSquare, 'K'),
    partial(placePiece, chooseARandomSquare, 'k'),
    times(8, () => partial(placePiece, chooseARandomSquare, 'P')),
    times(8, () => partial(placePiece, chooseARandomSquare, 'p'))
  ].flatMap(x => x);

  return flow(pieces)(createChessboard('8/8/8/8/8/8/8/8'));
};
