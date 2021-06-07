import filterAnagrams from './filter-anagrams';

test('leave any one out of three anagrams', () => {
  expect([['pan'], ['nap'], ['anp']]).toContainEqual(filterAnagrams(['pan', 'nap', 'anp']));
});

test('leave any one anagram out of each of two sets of independent anagrams', () => {
  expect([
    ['pan', 'ab'],
    ['nap', 'ab'],
    ['apn', 'ab'],
    ['pan', 'ba'],
    ['nap', 'ba'],
    ['apn', 'ba'],
  ]).toContainEqual(filterAnagrams(['pan', 'ab', 'nap', 'ba', 'apn']));
});

test('array without anagrams should not change', () => {
  expect(filterAnagrams(['pan', 'ab', 'Kan'])).toStrictEqual(['pan', 'ab', 'Kan']);
});

test('the filtering should be case-insensitive', () => {
  expect([['pan'], ['nAp'], ['anP']]).toContainEqual(filterAnagrams(['pan', 'nAp', 'anP']));
});

test("make sure the function doesn't return strings that didn't exist in the original array", () => {
  expect(filterAnagrams(['pan', 'nap'])).not.toStrictEqual(['anp']);
});
