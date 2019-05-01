export default piecePlacement => {
  return [...piecePlacement]
    .filter(p => p !== '/')
    .flatMap(placement => {
      const emptySquares = parseInt(placement, 10);
      return emptySquares ? Array(emptySquares).fill('.') : [placement];
    });
};
