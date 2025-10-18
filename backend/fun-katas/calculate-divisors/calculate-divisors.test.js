const calculateDivisors = require('./calculate-divisors')
describe('testing divisors function', () => {
  test('when passed 0, returns 0', () => {
    const actual = calculateDivisors(0)
    expect(actual).toBe(0)
  })
  test('returns 1 when passed a number with only one divisor under 3 and 5', () => {
    const actual = calculateDivisors(1);
    const expected = 0;
    expect(actual).toBe(expected);
  })
  test('returns sum of multiples of 3 and 5 up to num as higher limit, when passed number with many multples', () => {
    const actual = calculateDivisors(6);
    const expected = 8;
    expect(actual).toBe(expected);
  })
  test('returns sum of multiples of 3 and 5 up to num as higher limit, when passed a large number', () => {
    const actual = calculateDivisors(12);
    const expected = 33;
    expect(actual).toBe(expected);
  })
})