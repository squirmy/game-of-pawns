import test from 'ava';
import chooseARandomItem from './choose-random-item';

test('should choose an item from the supplied list (one item)', t => {
  t.is(chooseARandomItem([1]), 1);
  t.is(chooseARandomItem([3]), 3);
  t.is(chooseARandomItem([2]), 2);
});

test('should choose an item from the supplied list (two items)', t => {
  const choices = [55, 5];
  const choice = chooseARandomItem(choices);
  t.true(choices.includes(choice));
});
