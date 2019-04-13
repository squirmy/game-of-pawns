import formatBoardAsGrid from './format-board-as-grid';
import formatBoardAsFen from './format-board-as-fen';

export default (format, board) => {
  if (format === '--grid') {
    return formatBoardAsGrid(board);
  }

  if (format === '--fen' || format === undefined) {
    return formatBoardAsFen(board);
  }

  return '(╯°□°）╯︵ ┻━┻';
};
