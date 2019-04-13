/* eslint-disable no-console */
import { flow } from 'lodash';
import createRandomBoard from './create-random-board';
import formatBoard from './format-board/format-board';
import chooseARandomNumberOfPieces from './choose-random-item';

const format = process.argv[2];

flow(
  board => formatBoard(format, board),
  console.log
)(createRandomBoard(chooseARandomNumberOfPieces));
