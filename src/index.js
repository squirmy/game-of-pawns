import generateChessboard from './generate-chessboard';
import formatBoardAsGrid from './format-board-as-grid';

const chooseARandomNumberOfPieces = numberOfPieces => {
  const rand = Math.floor(Math.random() * numberOfPieces.length);
  return numberOfPieces[rand];
};

const board = generateChessboard(chooseARandomNumberOfPieces);

// eslint-disable-next-line no-console
console.log(formatBoardAsGrid(board));
