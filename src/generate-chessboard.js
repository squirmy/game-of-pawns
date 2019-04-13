import { flow, partial, times, range, shuffle } from 'lodash';
import createChessboard from './create-chessboard';
import chooseARandomSquare from './choose-a-random-item';
import placePiece from './place-piece/place-piece';

const placePieceRandomly = partial(placePiece, chooseARandomSquare);

export default chooseNumberOfPieces => {
  const placeN = (max, piece) =>
    times(chooseNumberOfPieces(range(0, max + 1)), () =>
      partial(placePieceRandomly, piece)
    );

  const placeOne = piece => times(1, () => partial(placePieceRandomly, piece));

  const placePieces = shuffle(
    [
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
    ].flatMap(x => x)
  );

  return flow(placePieces)(createChessboard('8/8/8/8/8/8/8/8'));
};
