/* eslint-disable no-console */
import { flow } from 'lodash';
import generateChessboard from './generate-chessboard';
import formatBoard from './format-board';

const chooseARandomNumberOfPieces = numberOfPieces => {
  const rand = Math.floor(Math.random() * numberOfPieces.length);
  return numberOfPieces[rand];
};

const format = process.argv[2];

flow(
  board => formatBoard(format, board),
  console.log
)(generateChessboard(chooseARandomNumberOfPieces));
