import { flow } from 'lodash';
import getInvalidKingSquares from './get-invalid-king-squares';
import getInvalidPawnSquares from './get-invalid-pawn-squares';

const getEmptySquares = board =>
  board.reduce(
    (emptySquares, square, i) =>
      square === '.' ? [...emptySquares, i] : emptySquares,
    []
  );

export default (chooseEmptySquare, piece, board) => {
  const placePiece = square => {
    const newBoard = [...board];
    newBoard[square] = piece;
    return newBoard;
  };

  const invalidSquares = [
    ...(piece.toLowerCase() === 'p' ? getInvalidPawnSquares(piece) : []),
    ...(piece.toLowerCase() === 'k' ? getInvalidKingSquares(board) : [])
  ];

  const removeInvalidSquares = emptySquares =>
    emptySquares.filter(square => !invalidSquares.includes(square));

  return flow(
    getEmptySquares,
    removeInvalidSquares,
    chooseEmptySquare,
    placePiece
  )(board);
};
