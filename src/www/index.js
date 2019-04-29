import 'normalize.css';
import './index.css';

import createRandomBoard from '../lib/create-random-board';
import formatBoardAsHtml from '../lib/format-board/format-board-as-html';
import chooseARandomNumberOfPieces from '../lib/choose-random-item';

const boardEl = document.getElementById('board-goes-here');
const randomlyPlacePiecesEl = document.getElementById('random');

const randomlyPlacePieces = () => {
  const board = createRandomBoard(chooseARandomNumberOfPieces);
  boardEl.innerHTML = formatBoardAsHtml(board);
};

randomlyPlacePiecesEl.onclick = randomlyPlacePieces;

randomlyPlacePieces();
