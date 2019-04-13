export default items => {
  const randomChoice = Math.floor(Math.random() * items.length);
  return items[randomChoice];
};
