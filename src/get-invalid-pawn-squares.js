export default piece => {
  if (piece === 'p') {
    return [0, 1, 2, 3, 4, 5, 6, 7];
  }

  if (piece === 'P') {
    return [56, 57, 58, 59, 60, 61, 62, 63];
  }

  return [];
};
