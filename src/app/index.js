/* eslint-disable no-console */
import createRandomBoard from '../lib/create-random-board';
import chooseARandomNumberOfPieces from '../lib/choose-random-item';
import formatBoard from './format-board';

const format = process.argv[2];

const board = createRandomBoard(chooseARandomNumberOfPieces);
const formattedBoard = formatBoard(format, board);

console.log(formattedBoard);
