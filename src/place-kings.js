import { flow, partial } from 'lodash';

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

  return flow(
    getEmptySquares,
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
