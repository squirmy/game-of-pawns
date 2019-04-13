import test from 'ava';
import { range } from 'lodash';
import createBoard from '../create-board';
import getInvalidKingSquares from './get-invalid-king-squares';

test('cannot place a 3rd king', t => {
  const invalidSquares = getInvalidKingSquares(
    createBoard('K7/8/8/8/8/8/8/7K')
  );

  t.deepEqual(invalidSquares, range(64));
});

test('cannot place a king on an adjacent square (non edge)', t => {
  const invalidSquares = getInvalidKingSquares(
    createBoard('8/1K6/8/8/8/8/8/8')
  );

  t.deepEqual(invalidSquares, [0, 1, 2, 8, 9, 10, 16, 17, 18]);
});

test('cannot place a king on an adjacent square (left edge)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('8/K7/8/8/8/8/8/8'));

  t.deepEqual(invalidSquares, [0, 1, 8, 9, 16, 17]);
});

test('cannot place a king on an adjacent square (right edge)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('8/7K/8/8/8/8/8/8'));

  t.deepEqual(invalidSquares, [6, 7, 14, 15, 22, 23]);
});

test('cannot place a king on an adjacent square (top edge)', t => {
  const invalidSquares = getInvalidKingSquares(
    createBoard('1K6/8/8/8/8/8/8/8')
  );

  t.deepEqual(invalidSquares, [0, 1, 2, 8, 9, 10]);
});

test('cannot place a king on an adjacent square (bottom edge)', t => {
  const invalidSquares = getInvalidKingSquares(
    createBoard('8/8/8/8/8/8/8/1K6')
  );

  t.deepEqual(invalidSquares, [48, 49, 50, 56, 57, 58]);
});

test('cannot place a king on an adjacent square (top left)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('K7/8/8/8/8/8/8/8'));

  t.deepEqual(invalidSquares, [0, 1, 8, 9]);
});

test('cannot place a king on an adjacent square (top right)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('7K/8/8/8/8/8/8/8'));

  t.deepEqual(invalidSquares, [6, 7, 14, 15]);
});

test('cannot place a king on an adjacent square (bottom left)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('8/8/8/8/8/8/8/K7'));

  t.deepEqual(invalidSquares, [48, 49, 56, 57]);
});

test('cannot place a king on an adjacent square (bottom right)', t => {
  const invalidSquares = getInvalidKingSquares(createBoard('8/8/8/8/8/8/8/7K'));

  t.deepEqual(invalidSquares, [54, 55, 62, 63]);
});
