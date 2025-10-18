const { check, runTest, skipTest } = require('../test-api/index.js');

/*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
*/
function getPalindromes(words) {
  // FILTER array to new array
  // reverse each element and check if og element === reversed element
  // return elements that pass check
  if (words.length === 0) {
    return [];
  }
  return words.filter((word) => {
    return word === word.split('').reverse().join('');
  });
 
  
}

console.log('getPalindromes()');

runTest('returns [] when passed []', function () {
  check(getPalindromes([])).isEqualTo([]);
});

runTest('identifies palindromes', function () {
  check(getPalindromes(['racecar'])).isEqualTo(['racecar']);
  check(getPalindromes(['racecar', 'racecar'])).isEqualTo([
    'racecar',
    'racecar',
  ]);
});

runTest('ignores non-palindromes', function () {
  check(getPalindromes(['racecar', 'kayak', 'tacocat'])).isEqualTo([
    'racecar',
    'kayak',
    'tacocat',
  ]);
  check(getPalindromes(['pineapple', 'pony', 'racecar'])).isEqualTo([
    'racecar',
  ]);
});

runTest('returns [] when passed no palindromes', function () {
  check(getPalindromes(['pineapple', 'watermelon', 'pony'])).isEqualTo([]);
});
