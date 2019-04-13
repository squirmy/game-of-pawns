import { flow, partial, times, range } from 'lodash';
import createChessboard from './create-chessboard';
import placePiece from './place-piece';

const chooseARandomSquare = emptySquares => {
  const rand = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[rand];
};

const placePieceRandomly = partial(placePiece, chooseARandomSquare);

export default chooseNumberOfPieces => {
  const placeN = (max, piece) =>
    times(chooseNumberOfPieces(range(0, max + 1)), () =>
      partial(placePieceRandomly, piece)
    );

  const placeOne = piece => times(1, () => partial(placePieceRandomly, piece));

  const pieces = [
    placeOne('K'),
    placeOne('k'),
    placeN(1, 'Q'),
    placeN(1, 'q'),
    placeN(8, 'P'),
    placeN(8, 'p'),
    placeN(2, 'R'),
    placeN(2, 'r'),
    placeN(2, 'N'),
    placeN(2, 'n'),
    placeN(2, 'B'),
    placeN(2, 'b')
  ].flatMap(x => x);

  return flow(pieces)(createChessboard('8/8/8/8/8/8/8/8'));
};
