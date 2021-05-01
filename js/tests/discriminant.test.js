const discriminant = require('../discriminant');

test('discriminant of the equation x^2-10x+25=0 should equal to 0', () => {
  expect(discriminant(1, -10, 25)).toBe(0);
});

test('discriminant of the equation x^2-5x+6=0 should equal to 1', () => {
  expect(discriminant(1, -5, 6)).toBe(1);
});

test('discriminant of the equation x^2-2=0 should equal to 8', () => {
  expect(discriminant(1, 0, -2)).toBe(8);
});

test('discriminant of the equation x^2-10x+26.3=0 should equal to -5.2', () => {
  expect(discriminant(1, -10, 26.3)).toBeCloseTo(-5.2);
});
