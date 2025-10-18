const { check, runTest, skipTest } = require('../test-api/index.js');

function findMissingLetter(letters) {
  /*
In this function, you need to find out which letter is missing. But you can't use a reference lookup table (i.e. no array or object with the whole alphabet in it) so you will have think outside the box!

This function needs to take a list and needs to return the letter it is missing.

You will always get a sorted array of consecutive letters, and it will always have exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
  */

  // loop through letters array
  // compare letter to charCodeAt - Offset
  // push to a new array
  // loop through the new array using for loop, .length and count i up
  // condition for if i doesnt increment by 1, then it returns false (ie if the array doesn't hold all the letters)

  let noMissingLetters = '';
  const alphabetOffset = letters[0] === letters[0].toUpperCase() ? 65 : 97;
  const letterCheck = [];
  for (let char in letters) {
    let letter = letters[char];
    letterCheck.push(letter.charCodeAt(0) - alphabetOffset);
  }
  for (let i = 0; i < letterCheck.length - 1; i++) {
    const currentLetter = letterCheck[i];
    const nextLetter = letterCheck[i + 1];
    if (nextLetter !== currentLetter + 1) {
      return String.fromCharCode(currentLetter + alphabetOffset + 1); //+ 1 ?? for some reason
    }
  }
  console.log(letterCheck);
  return noMissingLetters;
}

console.log('findMissingLetter()');

runTest('returns an empty string if no letters are missing', function () {
  check(findMissingLetter(['A', 'B', 'C', 'D', 'E'])).isEqualTo('');
});

runTest('returns a missing capital letter', function () {
  check(findMissingLetter(['A', 'B', 'C', 'E'])).isEqualTo('D');
});

runTest('returns a missing lower case letter', function () {
  check(findMissingLetter(['e', 'f', 'g', 'i'])).isEqualTo('h');
});
