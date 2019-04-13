export default board => {
  const kings = board
    .map((piece, square) => ({ piece, square }))
    .filter(({ piece }) => piece.toLowerCase() === 'k');

  if (kings.length > 1) {
    return board.map((_, i) => i);
  }

  return kings
    .map(king => {
      return [
        king.square - 9,
        king.square - 8,
        king.square - 7,
        king.square - 1,
        king.square,
        king.square + 1,
        king.square + 7,
        king.square + 8,
        king.square + 9
      ];
    })
    .flatMap(x => x);
};
