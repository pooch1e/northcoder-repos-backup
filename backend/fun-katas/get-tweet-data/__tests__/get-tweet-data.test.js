const getTweetData = require('../get-tweet-data');

describe('tests for getTweetData function', () => {
  test('when passed an empty string, returns an empty object', () => {
    const actual = getTweetData('');
    const expected = {};
    expect(actual).toEqual(expected);
  });
  test('when passed a string of one letter, returns object with length of 1', () => {
    const actual = getTweetData('h');
    const expected = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 1,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed a string that contains @, updates mention count on object', () => {
    const actual = getTweetData('My awesome tweet to @northcoders');
    const expected = {
      tags: [],
      mentions: ['@northcoders'],
      tagCount: 0,
      mentionCount: 1,
      length: 32,
    };
    expect(actual).toEqual(expected);
  });
  test('when passed a string that contains a single tag, returns updated tag value and count on data object', () => {
    const actual = getTweetData('My awesome tweet about #coding');
    const expected = {
      tags: ['#coding'],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 30,
    };
    expect(actual).toEqual(expected);
  });
  test('works for multiple tags and mentions', () => {
    const actual = getTweetData(
      'I am #coding with @northcoders I love #coding and @northcoders'
    );
    const expected = {
      tags: ['#coding'],
      mentions: ['@northcoders'],
      tagCount: 1,
      mentionCount: 1,
      length: 62,
    };
    expect(actual).toEqual(expected);
  });
});
