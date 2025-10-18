const getCentury = require('../katas/day-1/getCentury');
// 1. converts number to string
// 2. condition to check for suffix's
// 3. checks correct century

describe('tests for getCentury function', () => {
  test('returns a string', () => {
    const actual = getCentury(2000);
    expect(typeof actual).toBe('string');
  });

  test('string has correct suffix eg 19th, 20th, 21st', () => {
    const actual = getCentury(2000);
    const expected = '20th';
    expect(actual).toBe(expected);
  });

  test('works for different input centuries', () => {
    const test1 = getCentury(1983);
    const test2 = getCentury(2001);
    const test3 = getCentury(586);
    const test4 = getCentury(2025);

    expect(test1).toBe('20th')
    expect(test2).toBe('21st')
    expect(test3).toBe('6th');
    expect(test4).toBe('21st')
  });
});
