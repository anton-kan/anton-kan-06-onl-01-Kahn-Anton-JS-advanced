import subtract from './subtract';

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('subtracts 1.15 - 2.3 to equal -1.15', () => {
  expect(subtract(1.15, 2.3)).toBeCloseTo(-1.15);
});
