const tillAddition = require('./till-addition')

describe('tests for tillAddition', () => {
  test('when passed empty object, returns 0.00', () => {
    const actual = tillAddition({});
    const expected = '£0.00'
    expect(actual).toBe(expected);
  })
  test('when passed object with key and value of cash, returns correct change in a string', () => {
    const actual = tillAddition({ "1p": 1, "2p": 1 });
    const expected = '£0.03'
    expect(actual).toBe(expected);
  })
  test('when passed object with key and value of more cash, returns correct change in a string', () => {
    const actual = tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 });
    const expected = '£0.38'
    expect(actual).toBe(expected);
  })
  test('when passed object with key and value of more cash, returns correct change in a string', () => {
    const actual = tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 });
    const expected = '£1.85'
    expect(actual).toBe(expected);
  })
})