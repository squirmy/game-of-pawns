import test from 'ava';
import { range } from 'lodash';
import createChessboard from './create-chessboard';
import placeKings from './place-kings';
import getInvalidSquares from './get-invalid-squares';

test('places two kings on the chess board', t => {
  const board = placeKings(
    emptySquares => emptySquares[0],
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('Kk6/8/8/8/8/8/8/8'));
});

test('cannot place a 3rd king', t => {
  const invalidSquares = getInvalidSquares(
    createChessboard('K7/8/8/8/8/8/8/7K')
  );

  t.deepEqual(invalidSquares, range(64));
});

test('cannot place a king on an adjacent square (non edge)', t => {
  const invalidSquares = getInvalidSquares(
    createChessboard('8/1K6/8/8/8/8/8/8')
  );

  t.deepEqual(invalidSquares, [0, 1, 2, 8, 9, 10, 16, 17, 18]);
});
