import { flow, partial } from 'lodash';
import placePiece from './place-piece';

export default (chooseEmptySquare, board) => {
  const placeWhiteKing = partial(placePiece, chooseEmptySquare, 'K');
  const placeBlackKing = partial(placePiece, chooseEmptySquare, 'k');

  return flow(
    placeWhiteKing,
    placeBlackKing
  )(board);
};
