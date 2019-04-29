import formatBoardAsGrid from '../lib/format-board/format-board-as-grid';
import formatBoardAsFen from '../lib/format-board/format-board-as-fen';

export default (format, board) => {
  if (format === '--grid') {
    return formatBoardAsGrid(board);
  }

  if (format === '--fen' || format === undefined) {
    return formatBoardAsFen(board);
  }

  return '(╯°□°）╯︵ ┻━┻';
};
