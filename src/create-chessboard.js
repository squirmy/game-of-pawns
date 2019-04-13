export default piecePlacement => {
  return piecePlacement
    .split('/')
    .map(rank => {
      return [...rank]
        .map(placement => {
          const emptySquares = parseInt(placement, 10);
          return emptySquares ? Array(emptySquares).fill('.') : [placement];
        })
        .flatMap(x => x);
    })
    .flatMap(x => x);
};
