const { check, runTest, skipTest } = require('../test-api/index.js');

function alphabetReplace(string) {
  /*
This function that accepts a string of any length, and replaces each letter within each word with the corresponding index that that letter has in the alphabet.

You must have a space between each index number, and do NOT need to account extra for spaces between words.
  */

  // alphabet = 26
  // ascii alphabet offset = 97
  // loop through string
  //    in loop, find charAt of string element and - 97 to find the representing number + 1 (as a starts at 1)
  //return as a string with spaces inbetween each number

  const alphabetOffset = 97;
  const codeLowerCase = string.toLowerCase().replace(' ', '').trim();
  const code = [];
  for (let index in codeLowerCase) {
    let letter = codeLowerCase[index];
    code.push(letter.charCodeAt(0) - alphabetOffset + 1);
  }
  return code.join(' ');
}

console.log('alphabetReplace()');

runTest('replaces the letters in a single word with codes', function () {
  check(alphabetReplace('code')).isEqualTo('3 15 4 5');
});

runTest('is case-insensitive', function () {
  check(alphabetReplace('Northcoders')).isEqualTo(
    '14 15 18 20 8 3 15 4 5 18 19'
  );
});

runTest('ignores spaces between words', function () {
  check(alphabetReplace('expert programming')).isEqualTo(
    '5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7'
  );
});
