import test from 'ava';
import createChessboard from './create-chessboard';
import placeKings from './place-kings';

test('places two kings on the chess board', t => {
  const getRandomNumber = () => 0;
  const emptyBoard = createChessboard('8/8/8/8/8/8/8/8');

  const board = placeKings(getRandomNumber, emptyBoard);

  t.deepEqual(board, createChessboard('Kk6/8/8/8/8/8/8/8'));
});
