/* eslint-disable no-console */
import createRandomBoard from './create-random-board';
import formatBoard from './format-board/format-board';
import chooseARandomNumberOfPieces from './choose-random-item';

const format = process.argv[2];

const board = createRandomBoard(chooseARandomNumberOfPieces);
const formattedBoard = formatBoard(format, board);

console.log(formattedBoard);
