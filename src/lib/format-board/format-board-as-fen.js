import { chunk } from 'lodash';

export default board =>
  `${chunk(board, 8)
    .map(row => row.join(''))
    .map(str => str.replace(/\.+/g, match => match.length))
    .join('/')} w - - 0 1`;
