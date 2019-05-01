import { EOL } from 'os';
import { chunk } from 'lodash';

export default board =>
  chunk(board, 8)
    .map(rank => rank.join('  '))
    .join(EOL);
