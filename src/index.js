/* eslint-disable no-console */
import { flow } from 'lodash';
import generateChessboard from './generate-chessboard';
import chooseARandomNumberOfPieces from './choose-a-random-item';
import formatBoard from './format-board';

const format = process.argv[2];

flow(
  board => formatBoard(format, board),
  console.log
)(generateChessboard(chooseARandomNumberOfPieces));
