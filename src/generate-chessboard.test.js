import test from 'ava';
import generateChessboard from './generate-chessboard';

test('should generate a board with exactly one white and one black king', t => {
  const board = generateChessboard();

  t.is(board.filter(x => x === 'K').length, 1);
  t.is(board.filter(x => x === 'k').length, 1);
});
