import multiply from '../multiply/multiply';
import subtract from '../subtract/subtract';

const discriminant = (a, b, c) => subtract(multiply(b, b), multiply(4, multiply(a, c)));

export default discriminant;
