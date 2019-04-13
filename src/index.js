import generateChessboard from './generate-chessboard';
import formatBoardAsGrid from './format-board-as-grid';

const board = generateChessboard();

console.log(formatBoardAsGrid(board));
