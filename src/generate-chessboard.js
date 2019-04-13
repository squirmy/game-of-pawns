import { flow } from 'lodash';
import createChessboard from './create-chessboard';
import placeKings from './place-kings';

const chooseARandomSquare = emptySquares => {
  const rand = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[rand];
};

export default () => {
  return flow(board => placeKings(chooseARandomSquare, board))(
    createChessboard('8/8/8/8/8/8/8/8')
  );
};
