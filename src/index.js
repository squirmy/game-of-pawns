/* eslint-disable no-console */
import { flow } from 'lodash';
import createBoard from './create-board';
import populateBoard from './populate-board';
import formatBoard from './format-board/format-board';
import chooseARandomNumberOfPieces from './choose-random-item';

const format = process.argv[2];

flow(
  board => populateBoard(chooseARandomNumberOfPieces, board),
  board => formatBoard(format, board),
  console.log
)(createBoard('8/8/8/8/8/8/8/8'));
