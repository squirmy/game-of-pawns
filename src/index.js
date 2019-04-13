import generateChessboard from './generate-chessboard';
import formatBoardAsGrid from './format-board-as-grid';

const board = generateChessboard();

// eslint-disable-next-line no-console
console.log(formatBoardAsGrid(board));
