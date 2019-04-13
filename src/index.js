/* eslint-disable no-console */
import { flow } from 'lodash';
import generateChessboard from './generate-chessboard';
import formatBoard from './format-board';

const chooseARandomNumberOfPieces = numberOfPieces => {
  const rand = Math.floor(Math.random() * numberOfPieces.length);
  return numberOfPieces[rand];
};

flow(
  board => formatBoard(process.argv[2], board),
  console.log
)(generateChessboard(chooseARandomNumberOfPieces));
