const multiply = require('../multiply/multiply');
const subtract = require('../subtract/subtract');

const discriminant = (a, b, c) => subtract(multiply(b, b), multiply(4, multiply(a, c)));

module.exports = discriminant;
