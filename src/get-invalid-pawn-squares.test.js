import test from 'ava';
import getInvalidPawnSquares from './get-invalid-pawn-squares';

test('white pawns cannot be placed in the eigth rank', t => {
  const invalidSquares = getInvalidPawnSquares('P');
  t.deepEqual(invalidSquares, [0, 1, 2, 3, 4, 5, 6, 7]);
});

test('black pawns cannot be placed in the first rank', t => {
  const invalidSquares = getInvalidPawnSquares('p');
  t.deepEqual(invalidSquares, [56, 57, 58, 59, 60, 61, 62, 63]);
});

test('should not restrict unknown pieces', t => {
  const invalidSquares = getInvalidPawnSquares('K');
  t.deepEqual(invalidSquares, []);
});
