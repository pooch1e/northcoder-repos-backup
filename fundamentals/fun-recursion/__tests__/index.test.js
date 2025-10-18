// create your test suite here
const {
  reverseString,
  sumDigits,
  findMyFib,
  deepTotal,
  deepIncludes,
} = require('../recursion');

describe('testing reverseString function for correct recursion', () => {
  test('returns empty string when passed no string', () => {
    const emptyString = '';
    const actual = reverseString(emptyString);
    const expected = '';
    expect(actual).toBe(expected);
  });
  test('returns letter when passed a single letter, otherwise returns empty string if passed no string', () => {
    const singleLetter = 'r';
    const test1Letter = reverseString(singleLetter);
    const expected = 'r';
    expect(test1Letter).toBe(expected);
  });
  test('returns a reversed string, when passed a string of multiple letters', () => {
    const word = 'hello';
    const testWord = reverseString(word);
    const expected = 'olleh';
    expect(testWord).toBe(expected);
  });
  test('reverses a string of multiple words', () => {
    const sentence = 'hello world this is me';
    const actual = reverseString(sentence);
    const expected = 'em si siht dlrow olleh';
    expect(actual).toBe(expected);
  });
  test('when passed a sentence with punctuation, function reverses punctuation', () => {
    const sentence = 'hello world, this is me, cant you see!';
    const actual = reverseString(sentence);
    const expected = '!ees uoy tnac ,em si siht ,dlrow olleh';
    expect(actual).toBe(expected);
  });
});

describe('tests function to sum digits until one remains', () => {
  test('when passed nothing, returns undefined', () => {
    expect(typeof sumDigits()).toBe('undefined');
  });
  test('returns number when passed a single digit', () => {
    const number = 9;
    const actual = sumDigits(number);
    const expected = 9;
    expect(actual).toBe(expected);
  });
  test('when passed two digits, returns single number', () => {
    const number11 = 11;
    const actual = sumDigits(number11);
    const number99 = 99;
    const actual99 = sumDigits(number99);
    const expected11 = 2;
    const expected99 = 9;
    expect(actual).toBe(expected11);
    expect(actual99).toBe(expected99);
  });
  test('when function is passed three digits, returns a single number', () => {
    const number = 999;
    const actual = sumDigits(number);
    const expected = 9;
    expect(actual).toBe(expected);
  });
  test('works for multiple digits', () => {
    const number = 18392;
    const actual = sumDigits(number);
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe('testing function find number fib', () => {
  test('when passed no number, returns undefined', () => {
    expect(typeof findMyFib()).toBe('undefined');
  });
  test('when passed a number, returns a number', () => {
    expect(typeof findMyFib(0)).toBe('number');
  });
  test('when passed 1 returns first number in fib sequence', () => {
    const firstDigit = 1;
    const actual = findMyFib(firstDigit);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test('when passed 4, returns fourth number in fib sequence', () => {
    const fourthDigit = 4;
    const actual = findMyFib(fourthDigit);
    const expected = 3;
    expect(actual).toBe(expected);
  });
  test('when passed high nth number, returns that number in fib sequence', () => {
    const number = 8;
    const actual = findMyFib(number);
    const expected = 21;
    expect(actual).toBe(expected);
  });
});

describe('tests deepTotal function', () => {
  test('if passed an empty array, returns 0', () => {
    const empty = [];
    const actual = deepTotal(empty);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test('returns single number if passed array with no nested arrays', () => {
    const arrayOfInt = [2];
    const actual = deepTotal(arrayOfInt);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  test('returns sum of multiple ints in single array', () => {
    const arrayOfInts = [1, 2, 3, 4, 5];
    const actual = deepTotal(arrayOfInts);
    const expected = 15;
    expect(actual).toBe(expected);
  });
  test('returns sum of single int and single nested int', () => {
    const arrayOfInts = [1, [2]];
    const actual = deepTotal(arrayOfInts);
    const expected = 3;
    expect(actual).toBe(expected);
  });
  test('returns sum of all ints in nested arrays', () => {
    const input = [3, [[6]], 9];
    const actual = deepTotal(input);
    const expected = 18;
    expect(actual).toBe(expected);
  });
});

describe('tests for deepIncludes function', () => {
  test('returns a boolean when passed an input', () => {
    const array = [1, 2];
    const target = 3;
    const actual = deepIncludes(array, target);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('returns true if target is in array with single element', () => {
    const array = [1];
    const target = 1;
    const actual = deepIncludes(array, target);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('returns true if target is in array of multiple elements', () => {
    const array = [1, 2, 3, 4];
    const target = 3;
    const arrayOfStrings = ['toast', 'avocado', 'chilli flakes'];
    const targetString = 'avocado';
    const actual = deepIncludes(array, target);
    const actualWithString = deepIncludes(arrayOfStrings, targetString);
    const expected = true;
    expect(actual).toBe(expected);
    expect(actualWithString).toBe(expected);
  });
  test('returns true if target is in nested array of single element', () => {
    const array = [[1]];
    const target = 1;
    const actual = deepIncludes(array, target);
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('returns true if target is in nested array of abritrary amount', () => {
    const array = [1, [2, 3], 4, [[5]]];
    const target = 5;
    const actual = deepIncludes(array, target);
    const expected = true;
    expect(actual).toBe(expected);
    const falseArray = [1, 2, [3]];
    const falseTarget = 4;
    const actual2 = deepIncludes(falseArray, falseTarget);
    const expected2 = false;
    expect(actual2).toBe(expected2);
  });
});
