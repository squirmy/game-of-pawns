import test from 'ava';
import createChessboard from '../create-chessboard';
import placePiece from './place-piece';

test('cannot place a black pawn in the 1st rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.max(...emptySquares),
    'p',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('8/8/8/8/8/8/7p/8'));
});

test('cannot place a white pawn in the 8th rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'P',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('8/P7/8/8/8/8/8/8'));
});

test('places a black pawn in the 8th rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'p',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('p7/8/8/8/8/8/8/8'));
});

test('places a white pawn in the 1st rank on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.max(...emptySquares),
    'P',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('8/8/8/8/8/8/8/7P'));
});

test('places a pawn next to another pawn on the chess board', t => {
  const board = placePiece(
    emptySquares => emptySquares[0],
    'p',
    createChessboard('p7/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('pp6/8/8/8/8/8/8/8'));
});

test('places a king as close as possible to the other king on the chess board', t => {
  const board = placePiece(
    emptySquares => Math.min(...emptySquares),
    'k',
    createChessboard('K7/8/8/8/8/8/8/8')
  );

  t.deepEqual(board, createChessboard('K1k5/8/8/8/8/8/8/8'));
});
