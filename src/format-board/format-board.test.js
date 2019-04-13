import { EOL } from 'os';
import test from 'ava';
import createChessboard from '../create-chessboard';
import formatBoard from './format-board';

test('grid format formats as grid', t => {
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

test('fen format formats as fen', t => {
  const formattedBoard = formatBoard(
    '--fen',
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.is(formattedBoard, '8/8/8/8/8/8/8/8 w - - 0 1');
});

test('no format defaults to fen', t => {
  const formattedBoard = formatBoard(
    undefined,
    createChessboard('8/8/8/8/8/8/8/8')
  );

  t.is(formattedBoard, '8/8/8/8/8/8/8/8 w - - 0 1');
});

test('unknown format result in a table flip', t => {
  const formattedBoard = formatBoard(
    'huh',
    createChessboard('8/8/8/8/8/8/8/8')
  );
  t.is(formattedBoard, '(╯°□°）╯︵ ┻━┻');
});