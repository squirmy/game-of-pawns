import { flow, partial, times, range, shuffle } from 'lodash';
import chooseARandomSquare from './choose-random-item';
import placePiece from './place-piece/place-piece';
import createBoard from './create-board';

const placePieceRandomly = (numberOfPieces, piece) =>
  times(numberOfPieces, () => partial(placePiece, chooseARandomSquare, piece));

export default chooseNumberOfPieces => {
  const placeOne = piece => placePieceRandomly(1, piece);
  const placeUpTo = (max, piece) => {
    return placePieceRandomly(chooseNumberOfPieces(range(0, max + 1)), piece);
  };

  return flow(
    shuffle(
      [
        placeOne('K'),
        placeOne('k'),
        placeUpTo(1, 'Q'),
        placeUpTo(1, 'q'),
        placeUpTo(8, 'P'),
        placeUpTo(8, 'p'),
        placeUpTo(2, 'R'),
        placeUpTo(2, 'r'),
        placeUpTo(2, 'N'),
        placeUpTo(2, 'n'),
        placeUpTo(2, 'B'),
        placeUpTo(2, 'b'),
      ].flatMap(x => x),
    ),
  )(createBoard('8/8/8/8/8/8/8/8'));
};
