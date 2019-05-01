import { chunk } from 'lodash';

export default board =>
  `${chunk(board, 8)
    .map(rank => rank.join('').replace(/\.+/g, match => match.length))
    .join('/')} w - - 0 1`;
