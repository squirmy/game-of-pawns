export default board => {
  const squares = board.map(square => {
    const squareClass = square === '.' ? '' : ` ${square}`;
    return `<div class="square${squareClass}"></div>`;
  });
  return `<div class="board">${squares.join('')}</div>`;
};
