import test from 'ava';
import createBoard from '../create-board';
import formatBoardAsHtml from './format-board-as-html';

test('can format an empty board as html', t => {
  const htmlBoard = formatBoardAsHtml(createBoard('8/8/8/8/8/8/8/8'));

  t.is(
    htmlBoard,
    '<div class="board"><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div></div>',
  );
});

test('can format a chessboard in the starting position as html', t => {
  const htmlBoard = formatBoardAsHtml(
    createBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'),
  );

  t.is(
    htmlBoard,
    '<div class="board"><div class="square r"></div><div class="square n"></div><div class="square b"></div><div class="square q"></div><div class="square k"></div><div class="square b"></div><div class="square n"></div><div class="square r"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square p"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square P"></div><div class="square R"></div><div class="square N"></div><div class="square B"></div><div class="square Q"></div><div class="square K"></div><div class="square B"></div><div class="square N"></div><div class="square R"></div></div>',
  );
});
