import test from 'ava';
import createBoard from '../create-board';
import placePiece from './place-piece';

test('cannot place a black pawn in the 1st rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.max(...emptySquares),
    'p',
    createBoard('8/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('8/8/8/8/8/8/7p/8'));
});

test('cannot place a white pawn in the 8th rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'P',
    createBoard('8/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('8/P7/8/8/8/8/8/8'));
});

test('places a black pawn in the 8th rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'p',
    createBoard('8/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('p7/8/8/8/8/8/8/8'));
});

test('places a white pawn in the 1st rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.max(...emptySquares),
    'P',
    createBoard('8/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('8/8/8/8/8/8/8/7P'));
});

test('places a pawn next to another pawn on the chess board', t => {
  const board = placePiece(
    emptySquares => emptySquares[0],
    'p',
    createBoard('p7/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('pp6/8/8/8/8/8/8/8'));
});

test('places a king as close as possible to the other king on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'k',
    createBoard('K7/8/8/8/8/8/8/8'),
  );

  t.deepEqual(board, createBoard('K1k5/8/8/8/8/8/8/8'));
});
