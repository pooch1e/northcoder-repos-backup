const {
  removeLastNumber,
  raiseSalaries,
  updateTasks,
  cloneObject,
} = require('../pure');

/*
1. If given an empty array, returns an empty array
2. If given an array returns array with last number removed
3. Returns a new array
4. Original array is un-mutated 
*/

describe('removeLastNumber', () => {
  test('If given an empty array, returns an empty array', () => {
    const input = [];
    const actual = removeLastNumber(input);
    expect(actual).toEqual(input);
  });

  test('If given an array returns array with last number removed', () => {
    const input = [1, 2, 3, 4];
    const actual = removeLastNumber(input);
    const expected = [1, 2, 3];
    expect(actual).toEqual(expected);
  });

  test('Returns a new array', () => {
    const input = [1, 2, 3, 4];
    const actual = removeLastNumber(input);
    const expected = [...input];
    expect(actual).not.toBe(expected);
  });

  test('Original array is un-mutated', () => {
    const input = [1, 2, 3, 4];
    const copyInput = input;
    removeLastNumber(input);
    expect(input).toBe(copyInput);
  });
});

// 1. returns empty array if passed an empty array
// 2. returns array of objects with updated salaries
// 3. Returns a new array
// 4. Original array is un-mutated

describe('tests raiseSalaries', () => {
  test('If given an empty array, returns an empty array', () => {
    const input = [];
    const actual = raiseSalaries(input);
    expect(actual).toEqual(input);
  });

  test('returns array of objects with updated salaries', () => {
    const input = [
      { name: 'Alice', salary: 3000 },
      { name: 'Bob', salary: 2000 },
      { name: 'Vel', salary: 4500 },
    ];
    const actual = raiseSalaries(input, 10);
    const expected = [
      { name: 'Alice', salary: 3300 },
      { name: 'Bob', salary: 2200 },
      { name: 'Vel', salary: 4950 },
    ];

    expect(actual).toEqual(expected);
  });

  // test('returns a new array of objects', () => {
  //   const input = [
  //     { name: 'Alice', salary: 3000 },
  //     { name: 'Bob', salary: 2000 },
  //     { name: 'Vel', salary: 4500 },
  //   ];
  //   const actual = raiseSalaries(input, 10);
  //   const expected = [...input];
  //   expect(actual).not.toBe(expected);
  // });

  // test('original input is unmutated', () => {
  //   const input = [
  //     { name: 'Alice', salary: 3000 },
  //     { name: 'Bob', salary: 2000 },
  //     { name: 'Vel', salary: 4500 },
  //   ];
  //   const copyOfInput = input;
  //   raiseSalaries(input, 10);
  //   expect(input).toBe(copyOfInput);
  // });
});

// 1. Returns empty object if passed an empty object
// 2. Returns an object with updated tasks when passed only one string
// 3. Returns an object with updated tasks when passed multiple strings
// 4. Returns a new object
// 5. Original object is un-mutated

describe('tests updateTasks', () => {
  test('Returns empty object if passed an empty object', () => {
    const input = {};
    const actual = updateTasks(input);
    expect(actual).toEqual(input);
  });

  test('Returns an object with updated tasks when passed only one string', () => {
    const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const actual = updateTasks(person, 'read books');
    const expected = {
      name: 'Anat',
      tasks: ['feed Schnitzel', 'Go to pottery', 'read books'],
    };
    expect(actual).toEqual(expected);
  });

  test('Returns an object with updated tasks when passed multiple strings', () => {
    const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const actual = updateTasks(person, 'read books', 'tidy room');
    const expected = {
      name: 'Anat',
      tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room'],
    };
    expect(actual).toEqual(expected);
  });
// needs checking for toBe/toEqual
  // test('Returns a new object', () => {
  //   const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
  //   const actual = updateTasks(person, 'read books', 'tidy room');
  //   const expected = { ...person };
  //   expect(actual).not.toBe(expected);
  // });
// needs checking for toBe/toEqual
  // test('Original object is un-mutated', () => {
  //   const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
  //   const copyPerson = person;
  //   updateTasks(person, 'read books', 'tidy room');
  //   expect(person).toBe(copyPerson);
  // });
});

// Returns empty object if passed an empty object
// Copies object key and value to new object
// returns object with only source keys if target already has the same key?
// Returns a new Object
// Original object is un-mutated

/* const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

cloneObject(target, source);
// => { a: 1, b: 3, c: 4 } */

describe('tests cloneObject', () => {
  test('returns empty object if passed two empty object', () => {
    const actual = {};
    const expected = cloneObject({}, {});
    expect(actual).toEqual(expected);
  });

  test('copies object keys and values to target object', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const actual = cloneObject(target, source);
    const expected = { a: 1, b: 3, c: 4 };

    expect(actual).toEqual(expected);
  });

  test('function returns a new object', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const actual = cloneObject(target, source); // output of object

    expect(actual).not.toBe(target);
  });

  test('original input is un-mutated', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const copyOftarget = { ...target };
    cloneObject(target, source);
    expect(target).toEqual(copyOftarget);
  });
});
