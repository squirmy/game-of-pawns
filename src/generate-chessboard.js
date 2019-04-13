import createChessboard from './create-chessboard';
import placeKings from './place-kings';

const chooseARandomSquare = emptySquares => {
  const rand = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[rand];
};

export default () => {
  const board = placeKings(
    chooseARandomSquare,
    createChessboard('8/8/8/8/8/8/8/8')
  );

  return board;
};
