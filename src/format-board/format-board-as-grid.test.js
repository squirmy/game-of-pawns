import { EOL } from 'os';
import test from 'ava';
import createChessboard from '../create-chessboard';
import formatBoardAsGrid from './format-board-as-grid';

test('can format an empty board as a grid', t => {
  const grid = formatBoardAsGrid(createChessboard('8/8/8/8/8/8/8/8'));

  t.is(
    grid,
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

test('can format a chessboard in the starting position as a grid', t => {
  const grid = formatBoardAsGrid(
    createChessboard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
  );

  t.is(
    grid,
    `r  n  b  q  k  b  n  r${EOL}` +
      `p  p  p  p  p  p  p  p${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `.  .  .  .  .  .  .  .${EOL}` +
      `P  P  P  P  P  P  P  P${EOL}` +
      `R  N  B  Q  K  B  N  R`
  );
});
