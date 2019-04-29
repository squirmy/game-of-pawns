import test from 'ava';
import createBoard from './create-board';

test('should create an empty chessboard', t => {
  const chessboard = createBoard('8/8/8/8/8/8/8/8');

  // prettier-ignore
  t.deepEqual(chessboard, [
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
  ]);
});

test('should create a chessboard in the starting position', t => {
  const chessboard = createBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');

  // prettier-ignore
  t.deepEqual(chessboard, [
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
  ]);
});

test('should create a chessboard with a partially filled row', t => {
  const chessboard = createBoard('8/1p2P3/8/8/8/8/8/8');

  // prettier-ignore
  t.deepEqual(chessboard, [
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', 'p', '.', '.', 'P', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
  ]);
});
