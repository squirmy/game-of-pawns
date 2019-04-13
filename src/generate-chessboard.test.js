import test from 'ava';
import generateChessboard from './generate-chessboard';

const chooseTheMaximumNumberOfPieces = numberOfPiecesChoices =>
  Math.max(...numberOfPiecesChoices);

const chooseTheMinimumNumberOfPieces = numberOfPiecesChoices =>
  Math.min(...numberOfPiecesChoices);

const getPieceCount = board =>
  board.reduce((acc, square) => {
    return { ...acc, [square]: (acc[square] || 0) + 1 };
  }, {});

test('should generate a board with exactly one white and one black king', t => {
  const board = generateChessboard(chooseTheMaximumNumberOfPieces);

  t.is(board.filter(x => x === 'K').length, 1);
  t.is(board.filter(x => x === 'k').length, 1);
});

test('should generate a board with the maximum of each piece of each color', t => {
  const board = generateChessboard(chooseTheMaximumNumberOfPieces);

  t.deepEqual(getPieceCount(board), {
    '.': 32,
    K: 1,
    k: 1,
    Q: 1,
    q: 1,
    P: 8,
    p: 8,
    R: 2,
    r: 2,
    N: 2,
    n: 2,
    B: 2,
    b: 2
  });
});

test('should generate a board with the minimum of each piece of each color', t => {
  const board = generateChessboard(chooseTheMinimumNumberOfPieces);

  t.deepEqual(getPieceCount(board), {
    '.': 62,
    K: 1,
    k: 1
  });
});

test('should generate a board with the 1 of each piece of each color', t => {
  const board = generateChessboard(numberOfPiecesChoices =>
    numberOfPiecesChoices.find(x => x === 1)
  );

  t.deepEqual(getPieceCount(board), {
    '.': 52,
    K: 1,
    k: 1,
    Q: 1,
    q: 1,
    P: 1,
    p: 1,
    R: 1,
    r: 1,
    N: 1,
    n: 1,
    B: 1,
    b: 1
  });
});
