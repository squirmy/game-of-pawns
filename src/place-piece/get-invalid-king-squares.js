const adjacentPositions = [-9, -8, -7, -1, 0, 1, 7, 8, 9];

const getInvalidSquares = square => {
  const offBoardPositions = [
    ...(square % 8 === 0 ? [-9, -1, 7] : []),
    ...((square + 1) % 8 === 0 ? [-7, 1, 9] : []),
    ...(square < 8 ? [-9, -8, -7] : []),
    ...(square > 55 ? [7, 8, 9] : []),
  ];

  return adjacentPositions
    .filter(position => !offBoardPositions.includes(position))
    .map(position => square + position);
};

export default board => {
  const kings = board
    .map((piece, square) => ({ piece, square }))
    .filter(({ piece }) => piece.toLowerCase() === 'k');

  if (kings.length > 1) {
    return board.map((_, i) => i);
  }

  return kings.flatMap(({ square }) => getInvalidSquares(square));
};
