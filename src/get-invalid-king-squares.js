const invalidForNonEdge = [-9, -8, -7, -1, 0, 1, 7, 8, 9];
const createEdgeHandler = (isOnEdge, invalidEdgePositions) => (
  square,
  invalidPositions
) => {
  return isOnEdge(square)
    ? invalidEdgePositions.filter(x => new Set(invalidPositions).has(x))
    : invalidPositions;
};

const edgeHandlers = [
  createEdgeHandler(square => square % 8 === 0, [-8, -7, 0, 1, 8, 9]),
  createEdgeHandler(square => (square + 1) % 8 === 0, [-9, -8, -1, 0, 7, 8]),
  createEdgeHandler(square => square < 8, [-1, 0, 1, 7, 8, 9]),
  createEdgeHandler(square => square > 55, [-9, -8, -7, -1, 0, 1])
];

const getInvalidSquares = square => {
  return edgeHandlers
    .reduce((acc, edgeHandler) => edgeHandler(square, acc), invalidForNonEdge)
    .map(x => square + x);
};

export default board => {
  const kings = board
    .map((piece, square) => ({ piece, square }))
    .filter(({ piece }) => piece.toLowerCase() === 'k');

  if (kings.length > 1) {
    return board.map((_, i) => i);
  }

  return kings.map(king => getInvalidSquares(king.square)).flatMap(x => x);
};
