import 'normalize.css';
import './index.css';

import createRandomBoard from '../src/create-random-board';
import formatBoardAsHtml from '../src/format-board/format-board-as-html';
import chooseARandomNumberOfPieces from '../src/choose-random-item';

const boardEl = document.getElementById('board-goes-here');
const randomlyPlacePiecesEl = document.getElementById('random');

const randomlyPlacePieces = () => {
  const board = createRandomBoard(chooseARandomNumberOfPieces);
  boardEl.innerHTML = formatBoardAsHtml(board);
};

randomlyPlacePiecesEl.onclick = randomlyPlacePieces;

randomlyPlacePieces();
