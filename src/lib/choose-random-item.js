export default choices => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};
