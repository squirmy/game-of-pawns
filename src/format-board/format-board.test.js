import { EOL } from 'os';
import test from 'ava';
import createChessboard from '../create-chessboard';
import formatBoard from './format-board';

test('can format an empty board as a grid', t => {
  const formattedBoard = formatBoard(
    '--grid',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.is(
    formattedBoard,
    `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .`
  );
});

test('can format an empty board as a fen', t => {
  const formattedBoard = formatBoard(
    '--fen',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.is(formattedBoard, '8/8/8/8/8/8/8/8 w - - 0 1');
});

test('can format an empty board as a table flip', t => {
  const formattedBoard = formatBoard(
    'huh',
    createChessboard('8/8/8/8/8/8/8/8')
  );
  t.is(formattedBoard, '(╯°□°）╯︵ ┻━┻');
});
