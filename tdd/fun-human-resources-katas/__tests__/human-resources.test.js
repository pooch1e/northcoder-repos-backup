const removeAgents = require('../katas/00_removeAgents.js');
const makeNameTags = require('../katas/01_makeNameTags.js');
const createPoll = require('../katas/02_createPoll.js');
const removeSmarterAgents = require('../katas/03_removeSmarterAgents.js');
const removeEliteAgents = require('../katas/04_removeEliteAgents.js');

const largePoll = require('../data/poll-data.js');

describe('testing function removeAgents', () => {
  test('when function is passed an empty array, returns an empty array', () => {
    const employeesTest = [];
    const actual = removeAgents(employeesTest);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test('when passed an array of one object with no mole, returns object in array', () => {
    const employeesTest = [{ name: 'Sam', profession: 'artist' }];
    const actual = removeAgents(employeesTest);
    const expected = [{ name: 'Sam', profession: 'artist' }];
    expect(actual).toEqual(expected);
  });

  test('when passed an array with one object containing a mole, returns empty array', () => {
    const employeesTest = [{ name: 'Coco', profession: 'mole' }];
    const actual = removeAgents(employeesTest);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test('when passed an array with multiple objects containing moles, returns employee objects who are not moles', () => {
    const employeesTest = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Coco', profession: 'mole' },
      { name: 'Trudi', profession: 'mole' },
      { name: 'John', profession: 'builder' },
    ];
    const actual = removeAgents(employeesTest);
    const expected = [
      { name: 'Sam', profession: 'artist' },
      { name: 'John', profession: 'builder' },
    ];
    expect(actual).toEqual(expected);
  });

  test('returns a new array of object/s', () => {
    const input = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Coco', profession: 'mole' },
      { name: 'Trudi', profession: 'mole' },
      { name: 'John', profession: 'builder' },
    ];

    const actual = removeAgents(input);
    expect(actual).not.toBe(input);
  });

  test('function does not mutate original input', () => {
    const input = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Coco', profession: 'mole' },
      { name: 'Trudi', profession: 'mole' },
      { name: 'John', profession: 'builder' },
    ];
    const copyOfInput = structuredClone(input);
    removeAgents(input);
    expect(input).toEqual(copyOfInput);
  });
});

describe('testing function makeNameTags', () => {
  test('when passed empty array, returns empty array', () => {
    const testArray = [];
    const actual = makeNameTags(testArray);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test('when passed single object, returns object with nameTag key added with correct properties', () => {
    const testPerson = [
      {
        title: 'Mx',
        forename: 'Jules',
        surname: 'Gobert',
        age: 30,
        company: 'Apple',
      },
    ];
    const actual = makeNameTags(testPerson);
    const expected = [
      {
        title: 'Mx',
        forename: 'Jules',
        surname: 'Gobert',
        age: 30,
        company: 'Apple',
        nameTag: 'Mx Jules Gobert, Apple',
      },
    ];
    expect(actual).toEqual(expected);
  });
  test('when passed multiple object, returns objects with nameTag key added with correct properties', () => {
    const multipleTestPeople = [
      {
        title: 'Mx',
        forename: 'Jules',
        surname: 'Gobert',
        age: 30,
        company: 'Apple',
      },
      {
        title: 'Mr',
        forename: 'Kermit',
        surname: 'The Frog',
        age: 35,
        company: 'Jim Henson Studios',
      },
      {
        title: 'Miss',
        forename: 'Trudi',
        surname: 'Treble',
        age: 30,
        company: 'Freelance Photographer',
      },
    ];
    const actual = makeNameTags(multipleTestPeople);
    const expected = [
      {
        title: 'Mx',
        forename: 'Jules',
        surname: 'Gobert',
        age: 30,
        company: 'Apple',
        nameTag: 'Mx Jules Gobert, Apple',
      },
      {
        title: 'Mr',
        forename: 'Kermit',
        surname: 'The Frog',
        age: 35,
        company: 'Jim Henson Studios',
        nameTag: 'Mr Kermit The Frog, Jim Henson Studios',
      },
      {
        title: 'Miss',
        forename: 'Trudi',
        surname: 'Treble',
        age: 30,
        company: 'Freelance Photographer',
        nameTag: 'Miss Trudi Treble, Freelance Photographer',
      },
    ];
    expect(actual).toEqual(expected);
  });
  test('returns new array of object/s', () => {
    const testPerson = [
      {
        title: 'Mx',
        forename: 'Jules',
        surname: 'Gobert',
        age: 30,
        company: 'Apple',
      },
    ];
    const actual = makeNameTags(testPerson);
    expect(actual).not.toBe(testPerson);
  });
  test('function does not mutate original input', () => {
    const testPersonInput = [
      {
        title: 'Miss',
        forename: 'Trudi',
        surname: 'Treble',
        age: 30,
        company: 'Freelance Photographer',
      },
    ];
    const copyOfPerson = structuredClone(testPersonInput);
    makeNameTags(testPersonInput);
    expect(testPersonInput).toEqual(copyOfPerson);
  });
});

describe('testing createPoll function', () => {
  test('returns empty object if passed array with no elements', () => {
    const emptyArray = [];
    const actual = createPoll(emptyArray);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  test('returns object with one key/value if passed array with one item', () => {
    const arrayOfVotes = ['dogs'];
    const actual = createPoll(arrayOfVotes);
    const expected = { dogs: 1 };
    expect(actual).toEqual(expected);
  });
  test('returns objects with multiple items of correct key/value if passed array with multiple elements', () => {
    const arrayOfVotes = ['dogs', 'cats', 'dogs', 'budgies', 'dogs'];
    const actual = createPoll(arrayOfVotes);
    const expected = { dogs: 3, cats: 1, budgies: 1 };
    expect(actual).toEqual(expected);
  });
  test('returns object with unique keys', () => {
    const arrayOfVotes = [
      'dogs',
      'cats',
      'dogs',
      'budgies',
      'dogs',
      'human',
      'cougar',
      'cougar',
    ];
    const actual = createPoll(arrayOfVotes);
    const expected = { budgies: 1, cats: 1, cougar: 2, dogs: 3, human: 1 };
    expect(actual).toEqual(expected);
  });
  test('returns object when passed large array of votes', () => {
    const actual = createPoll(largePoll);
    const expected = {
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      'lonesome plum': 1,
    };
    expect(actual).toEqual(expected);
  });

  test('returns a new object', () => {
    const arrayOfVotes = ['dogs', 'cats', 'mice'];
    const actual = createPoll(arrayOfVotes);
    expect(actual).not.toEqual(arrayOfVotes);
    // ask question on this one - how to test for new object if function returns a totally different data type?
  });
  test('does not mutate original input', () => {
    const arrayOfVotes = ['dogs', 'cats', 'mice'];
    const copyOfArrayOfVotes = [...arrayOfVotes];
    createPoll(arrayOfVotes);
    expect(arrayOfVotes).not.toBe(copyOfArrayOfVotes);
  });
});

describe('testing removeSmarterAgents function', () => {
  test('returns empty array if passed empty array', () => {
    const emptyArray = [];
    const actual = removeAgents(emptyArray);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test('when passed single object with mole, removes object from array', () => {
    const testMoleEmployee = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code', 'guacamole'],
      },
    ];
    const actual = removeSmarterAgents(testMoleEmployee);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test('when passed multiple objects with moles, removes from array', () => {
    const testMoleEmployee = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code', 'guacamole'],
      },
      {
        name: 'Mitch',
        age: 29,
        aboutMe: 'I am not a mole - I am a human being!',
        interests: ['Tudor hymns', 'dancing'],
      },
      {
        name: 'Jonny',
        age: 32,
        aboutMe: "I'm a father of two girls - it's great!",
        interests: ['parenting'],
      },
      {
        name: 'Vel',
        age: 28,
        aboutMe: 'I love games!',
        interests: ['Magic', 'Monopoly Express'],
      },
    ];
    const actual = removeSmarterAgents(testMoleEmployee);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test('returns non moles when passed array of no moles', () => {
    const noMoleArray = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code'],
      },
    ];
    const actual = removeSmarterAgents(noMoleArray);
    const expected = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code'],
      },
    ];
    expect(actual).toEqual(expected);
  });

  test('returns new array', () => {
    const testArray = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code'],
      },
    ];
    const actual = removeSmarterAgents(testArray);
    expect(actual).not.toBe(testArray);
  });
  test('does not mutate original input', () => {
    const testArray = [
      {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code'],
      },
    ];
    const copyOfArray = structuredClone(testArray);
    removeSmarterAgents(testArray);
    expect(testArray).toEqual(copyOfArray);
  });
});
