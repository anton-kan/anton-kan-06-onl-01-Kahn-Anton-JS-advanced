const multiply = require('./multiply');

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies 1.15 * 2.3 to equal 2.645', () => {
  expect(multiply(1.15, 2.3)).toBeCloseTo(2.645);
});
