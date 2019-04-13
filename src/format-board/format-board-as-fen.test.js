import test from 'ava';
import createBoard from '../create-board';
import formatBoardAsFen from './format-board-as-fen';

test('can format an empty board as fen', t => {
  const fen = formatBoardAsFen(createBoard('8/8/8/8/8/8/8/8'));
  t.is(fen, '8/8/8/8/8/8/8/8 w - - 0 1');
});

test('can format a chessboard in the starting position as a grid', t => {
  const fen = formatBoardAsFen(
    createBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'),
  );

  t.is(fen, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1');
});

test('should create a chessboard with a partially filled row', t => {
  const fen = formatBoardAsFen(createBoard('8/1p2P3/8/8/8/8/8/8'));

  t.is(fen, '8/1p2P3/8/8/8/8/8/8 w - - 0 1');
});
