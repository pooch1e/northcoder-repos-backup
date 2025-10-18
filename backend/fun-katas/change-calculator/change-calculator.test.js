const changeCalculator = require('./change-calculator')
describe('tests for changeCalculator', () => {
  test('when passed 0, returns empty object', () => {
    const actual = changeCalculator(0);
    const expected = {};
    expect(actual).toEqual(expected);
  })
  test('when passed 1, returns object with key of 1p and value of 1', () => {
    const actual = changeCalculator(1);
    const expected = {
    '1p': 1,
    '2p': 0,
    '5p': 0,
    '10p': 0,
    '20p': 0,
    '50p': 0,
    '1': 0,
    '2': 0,
  };
    expect(actual).toEqual(expected);
  })
  test('works for odd denominations', () => {
    const actual = changeCalculator(7);
    const expected = {
    '1p': 0,
    '2p': 1,
    '5p': 1,
    '10p': 0,
    '20p': 0,
    '50p': 0,
    '1': 0,
    '2': 0,
  };
    expect(actual).toEqual(expected);
  })
})