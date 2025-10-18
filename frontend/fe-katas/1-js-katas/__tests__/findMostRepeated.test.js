const {
  findMostRepeated,
} = require('../katas/findMostRepeated/findMostRepeated');

describe('findMostRepeated()', () => {
  test('returns empty object with correct structure when passed empty array', () => {
    const emptyArray = [];
    const actual = findMostRepeated(emptyArray);
    const expected = {
      elements: [],
      repeats: null,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed an array with one element, returns correct object', () => {
    const arr = ['foo'];
    const actual = findMostRepeated(arr);
    const expected = {
      elements: ['foo'],
      repeats: 1,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed an array with two elements, returns correct object', () => {
    const arr = ['foo', 'foo'];
    const actual = findMostRepeated(arr);
    const expected = {
      elements: ['foo'],
      repeats: 2,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed an array with 5 elements, returns correct object', () => {
    const arr = ['foo', 'foo', 'foo', 'poo', 'cow'];
    const actual = findMostRepeated(arr);
    const expected = {
      elements: ['foo'],
      repeats: 3,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed an array with different elements, returns correct object', () => {
    const arr = ['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo'];
    const actual = findMostRepeated(arr);
    const expected = { elements: ['foo', 'bar'], repeats: 3 };
    expect(actual).toEqual(expected);
  });
});
