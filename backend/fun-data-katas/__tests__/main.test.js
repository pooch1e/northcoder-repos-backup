const createRef = require('../createRef');
describe('tests for createRef function', () => {
  test('when passed an empty array, returns an empty object', () => {
    const actual = createRef([]);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  test('when passed array with one name, returns name mapped to object with value and property', () => {
    const data = [{ name: 'Rose', id: 'dS8rJns', secretFear: 'spiders' }];
    const expected = { Rose: 'dS8rJns' };
    expect(createRef(data, 'name', 'id')).toEqual(expected);
  });
  test('when passed array with one multiple names, returns name mapped to object with value and property', () => {
    const data = [
      { name: 'Rose', id: 'dS8rJns', secretFear: 'spiders' },
      { name: 'Simon', id: 'Pk34ABs', secretFear: 'mice' },
      { name: 'Jim', id: 'lk1ff8s', secretFear: 'bears' },
      { name: 'David', id: 'og8r0nV', secretFear: 'Rose' },
    ];
    const expected = {
      Rose: 'dS8rJns',
      Simon: 'Pk34ABs',
      Jim: 'lk1ff8s',
      David: 'og8r0nV',
    };
    const expectedTwo = {
      Rose: 'spiders',
      Simon: 'mice',
      Jim: 'bears',
      David: 'Rose',
    };
    expect(createRef(data, 'name', 'id')).toEqual(expected);
    expect(createRef(data, 'name', 'secretFear')).toEqual(expectedTwo);
  });
  test('returns object with correct values and properties', () => {
    const data = [
      { name: 'Rose', id: 'dS8rJns', secretFear: 'spiders' },
      { name: 'Simon', id: 'Pk34ABs', secretFear: 'mice' },
      { name: 'Jim', id: 'lk1ff8s', secretFear: 'bears' },
      { name: 'David', id: 'og8r0nV', secretFear: 'Rose' },
    ];
    const expected = {
      spiders: 'dS8rJns',
      mice: 'Pk34ABs',
      bears: 'lk1ff8s',
      Rose: 'og8r0nV',
    };
    expect(createRef(data, 'secretFear', 'id')).toEqual(expected);
  });
  test('returns a new object', () => {
    const actual = createRef(
      [{ name: 'Rose', id: 'dS8rJns', secretFear: 'spiders' }],
      'name',
      'id'
    );
    expect(actual).not.toBe({ Rose: 'dS8rJns' });
  });
  test('does not mutate original array', () => {
    const data = [{ name: 'Rose', id: 'dS8rJns', secretFear: 'spiders' }];
    const dataCopy = structuredClone(data);
    createRef(data);
    expect(dataCopy).toEqual(data);
  });
});
