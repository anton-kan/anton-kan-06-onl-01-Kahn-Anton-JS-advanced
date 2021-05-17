const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const discriminant = require('./discriminant');

const aInputElement = document.querySelector('#a-input');
const bInputElement = document.querySelector('#b-input');
const cInputElement = document.querySelector('#c-input');
const actionSelectElement = document.querySelector('#action-select');
const calculateBtnElement = document.querySelector('#calculate-btn');
const resultInputElement = document.querySelector('#result-input');

function calculate() {
  const a = +aInputElement.value;
  const b = +bInputElement.value;
  const c = +cInputElement.value;
  let result;
  switch (actionSelectElement.value) {
    case 'sum':
      result = sum(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'discriminant':
      result = discriminant(a, b, c);
      break;
    default:
      break;
  }
  resultInputElement.value = result;
}

calculateBtnElement.addEventListener('click', calculate);
