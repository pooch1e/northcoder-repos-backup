const areOrdered = require('../katas/day-1/areOrdered');

describe('testing order array function', () => {
  
  test('if given empty array, return false', () => {
    const actual = areOrdered([])
    expect(actual).toBe(false);
  })

  test('returns a boolean', () => {
    const actual = areOrdered([1, 2, 3]);
    expect(typeof actual).toBe('boolean');
  });

  test('returns false if array is unordered', () => {
    const actual = areOrdered([1, 4, 3]);
    expect(actual).toBe(false);
  });

  test('returns true if array is ordered', () => {
    const actual = areOrdered([1, 2, 3]);
    expect(actual).toBe(true);
  });
});
