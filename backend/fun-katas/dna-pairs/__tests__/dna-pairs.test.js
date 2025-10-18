const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('when passed emtpy string, returns empty array', () => {
    const actual = dnaPairs('');
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test('when passed string with single DNA letter, returns nested array with letter-pair', () => {
    const actual = dnaPairs('A');
    const expected = [['A', 'T']];
    expect(actual).toEqual(expected);
  });
  test('when passed multiple DNA strands, returns nested pairs', () => {
    const actual = dnaPairs('ATAG');
    const expected = [
      ['A', 'T'],
      ['T', 'A'],
      ['A', 'T'],
      ['G', 'C'],
    ];
    expect(actual).toEqual(expected);
  });
});
