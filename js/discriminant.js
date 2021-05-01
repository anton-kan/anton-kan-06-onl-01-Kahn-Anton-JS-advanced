const multiply = require('./multiply');
const subtract = require('./subtract');

function discriminant(a, b, c) {
  return subtract(multiply(b, b), multiply(4, multiply(a, c)));
}

module.exports = discriminant;
