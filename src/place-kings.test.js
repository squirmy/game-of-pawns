import test from 'ava';
import createChessboard from './create-chessboard';
import placeKings from './place-kings';

test('places two kings on the chess board', t => {
  const board = placeKings(
    emptySquares => emptySquares[0],
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('K1k5/8/8/8/8/8/8/8'));
});
