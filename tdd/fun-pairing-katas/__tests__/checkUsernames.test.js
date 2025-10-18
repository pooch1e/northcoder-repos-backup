const checkUsernames = require('../katas/day-1/checkUsernames');
// A valid username is a string that:
// is at least 5 characters long.
// only contains lowercase letters, numbers and underscores.
// is no longer than 20 characters in length.

describe('testing checkUsername Function', () => {
  test('returns true when passed username of more than 5 characters', () => {
    const actual = checkUsernames(['username']);
    expect(actual).toBe(true);
  });

  test('returns true when passed username of less than 20 characters', () => {
    const actual = checkUsernames(['username']);
    expect(actual).toBe(true);
  });

  test('returns false when passed username of more than 20 characters', () => {
    const actual = checkUsernames(['usernameashdjassjhasdhjshdjashdja']);
    expect(actual).toBe(false);
  });

  test('returns false when passed username of invalid letters and characters', () => {
    const actual = checkUsernames(['HeLLOdaADj123']);
    expect(actual).toBe(false);
  });

  test('works for multiple usernames in array', () => {
    const actual = checkUsernames([
      'ashjdaks',
      'joelkram123@',
      'joelKram',
      'joelkram',
      'jask',
    ]);
    expect(actual).toBe(true);
  });

  test('returns a boolean', () => {
    const actual = checkUsernames(['username']);
    expect(typeof actual).toBe('boolean');
  });
});
