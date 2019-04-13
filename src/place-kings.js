import { flow, partial } from 'lodash';

const getEmptySquares = board =>
  board.reduce(
    (emptySquares, square, i) =>
      square === '.' ? [...emptySquares, i] : emptySquares,
    []
  );

const getRandomSquare = (getRandomNumber, emptySquares) => {
  return emptySquares[getRandomNumber(emptySquares.length)];
};

const placePiece = (board, square, piece) => {
  const newBoard = [...board];
  newBoard[square] = piece;
  return newBoard;
};

const randomPlacePiece = (getRandomNumber, piece, board) => {
  return flow(
    getEmptySquares,
    emptySquares => getRandomSquare(getRandomNumber, emptySquares),
    square => placePiece(board, square, piece)
  )(board);
};

export default (getRandomNumber, board) => {
  const placeRandomWhiteKing = partial(randomPlacePiece, getRandomNumber, 'K');
  const placeRandomBlackKing = partial(randomPlacePiece, getRandomNumber, 'k');

  return flow(
    placeRandomWhiteKing,
    placeRandomBlackKing
  )(board);
};
