import formatBoardAsGrid from './format-board-as-grid';
import formatBoardAsFen from './format-board-as-fen';

export default (format, board) => {
  switch (format) {
    case '--grid':
      return formatBoardAsGrid(board);
    case '--fen':
      return formatBoardAsFen(board);
    default:
      return '';
  }
};
