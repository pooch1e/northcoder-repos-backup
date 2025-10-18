const removeDuplicates = require('../katas/day-2/removeDuplicates');

//Test: no duplicates
//Test:Returning an Array
//Test: That its a new Array and
//Test: The original Array is unmutated
describe('removeDuplicates removes duplicates in an Array', () => {
  const testArray = [1, 2, 3, 3, 3, 4, 5, 1];
  test('test that there are no duplicates', () => {
    const passedArray = removeDuplicates(testArray);
    expect(passedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('when passed an array, function returns new array', () => {
    const actual = removeDuplicates(testArray);
    expect(actual).not.toEqual(testArray);
  });

  test('test that original array remains unmutated', () => {
    const test = [...testArray]
    removeDuplicates(testArray)
    expect(testArray).toEqual(test);
  })
});
