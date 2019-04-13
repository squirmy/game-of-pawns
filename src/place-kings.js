import { flow, partial } from 'lodash';
import getInvalidKingSquares from './get-invalid-king-squares';

const getEmptySquares = board =>
  board.reduce(
    (emptySquares, square, i) =>
      square === '.' ? [...emptySquares, i] : emptySquares,
    []
  );

const placePieceOnEmptySquare = (chooseEmptySquare, piece, board) => {
  const placePiece = square => {
    const newBoard = [...board];
    newBoard[square] = piece;
    return newBoard;
  };

  const removeInvalidSquares = emptySquares =>
    emptySquares.filter(x => !new Set(getInvalidKingSquares(board)).has(x));

  return flow(
    getEmptySquares,
    removeInvalidSquares,
    chooseEmptySquare,
    placePiece
  )(board);
};

export default (chooseEmptySquare, board) => {
  const placePiece = partial(placePieceOnEmptySquare, chooseEmptySquare);
  const placeWhiteKing = partial(placePiece, 'K');
  const placeBlackKing = partial(placePiece, 'k');

  return flow(
    placeWhiteKing,
    placeBlackKing
  )(board);
};
