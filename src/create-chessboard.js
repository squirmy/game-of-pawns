export default piecePlacement => {
  return piecePlacement.split('/').flatMap(rank => {
    return [...rank].flatMap(placement => {
      const emptySquares = parseInt(placement, 10);
      return emptySquares ? Array(emptySquares).fill('.') : [placement];
    });
  });
};
