import { EOL } from 'os';
import { chunk } from 'lodash';

export default board =>
  chunk(board, 8)
    .map(row => row.join('  '))
    .join(EOL);
