import { flow } from 'lodash';
import getInvalidKingSquares from './get-invalid-king-squares';
import getInvalidPawnSquares from './get-invalid-pawn-squares';

const getEmptySquares = board =>
  board.reduce(
    (emptySquares, square, i) =>
      square === '.' ? [...emptySquares, i] : emptySquares,
    []
  );

const getInvalidSquares = (piece, board) => {
  switch (piece.toLowerCase()) {
    case 'p':
      return getInvalidPawnSquares(piece);
    case 'k':
      return getInvalidKingSquares(board);
    default:
      return [];
  }
};

export default (chooseEmptySquare, piece, board) => {
  const placePiece = square => {
    const newBoard = [...board];
    newBoard[square] = piece;
    return newBoard;
  };

  const removeInvalidSquares = emptySquares =>
    emptySquares.filter(x => !new Set(getInvalidSquares(piece, board)).has(x));

  return flow(
    getEmptySquares,
    removeInvalidSquares,
    chooseEmptySquare,
    placePiece
  )(board);
};
