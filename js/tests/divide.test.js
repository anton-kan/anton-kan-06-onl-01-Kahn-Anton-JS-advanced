const divide = require('../divide');

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('divides 2.3 / 1.15 to equal 2', () => {
  expect(divide(2.3, 1.15)).toBeCloseTo(2);
});
